const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require("cookie-parser");

const collections = ["accounts"];
const mongojs = require("mongojs");
const database = "news_db";
const db = mongojs(database,collections);
const app = express();
const port = 5000;

app.use(bodyParser());

var client_id = "6c08366188224e3fa487627b7964b6ee";
var client_secret = "312856c068854046b564c9817dcc12eb";
var redirect_uri = "http://localhost:5000/callback";
var stateKey = 'spotify_auth_state';

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// app.post("/api/accounts",(req,res)=>{
//   var loggedInUser = req.body;
//   var flag = false;
//   db.accounts.find({},(err,data)=>{
//
//       for(var i = 0; i <= data.length - 1;i++){
//
//             if(data[i].username == loggedInUser.username && data[i].password == loggedInUser.password){
//               console.log("Match");
//               res.redirect("/home");
//               break;
//             }else{
//               flag = false;
//             }
//
//           }
//           if(flag){
//             res.redirect("/login");
//           }
//         });
//       });


//------------------------------------

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());


// url to start oauth
app.get('/spotify-login', function(req, res) {
  // state is random code
  var state = generateRandomString(16);
  // saves state to cookie
  res.cookie(stateKey, state);
   console.log("spotify");
   // scope determines the accesss tha app has to the user data
  var scope = 'user-read-private user-read-email user-read-playback-state';
  // redirected to authorize link and app's api data is verified and also the type of scope and the redirect url the user will be sent to
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
// callback is the targeted redirect url that the user will be sent to after authoirzation
app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter
  // code and state are accessed by the cookies in res and are set to new variables
  var code = req.query.code || null;
  var state = req.query.state || null;
  // (learn ? : )
  var storedState = req.cookies ? req.cookies[stateKey] : null;
  // if the authorization went wrong or invalid data then refirect user to same url with error  message
  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  }
  // if sucessfull clear the cookie for secruity purposes
  // object oauth will have the url and redirect url and the authorization codes and the authroization type
  else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };
    // use request npm to pass auth variable
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
          // get the returned access tokens
          // body contains the user's data
        var access_token = body.access_token,
            refresh_token = body.refresh_token;
            //object has the (link with all the user data in an object)
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };
          // console logs user sportify data
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // logs in the returned data
        // use the access token to access the Spotify Web API
        // we can also pass the token to the browser to make requests from there
        res.redirect('http://localhost:3000/home/' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } // if there is an error redirect user to same url and send error message
      else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

//---------------End of Oauth Spotify---------------

app.listen(port,(req,res)=>{
  MongoStartup();
  request.get("https://cnn.com",(err,data,html)=>{
      const $ = cheerio.load(html);

     var HTML = $(html).find().text();
     console.log(HTML);
     $("div").each((i,data)=>{
      var paragraph = $(data).find().text();
      console.log(paragraph);

     })
  });
  console.log("App is running on localhost:"+port);
});


const MongoStartup = ()=>{
  db.accounts.find({},(err,resp)=>{
    console.log(resp);
    if(resp.length > 0){
      console.log("Accounts are in database");
    }else{
      db.accounts.insert({
        username:"lopunny1",
        password:"pitaj1",
        name:"Jayne Wayne"
      },(err,data)=>{
        console.log(data);

      });
    }

  });
}

app.post("/api/accounts",(req,res)=>{
  var account = req.body;
    db.accounts.find({},(err,data)=>{
      var found = false;
      for(var i = 0; i < data.length; i++){
        if(account.username === data[i].username){
          console.log("User already exists");
          found = true;
          break;
        }
      }
      if (!found){
        console.log("User is entered");
        db.accounts.insert(account);

      }
    });

});


app.get("/api/accounts",(req,res)=>{
  db.accounts.find({},(err,data)=>{
    res.json(data);

  });
});
