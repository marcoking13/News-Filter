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
const MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/news_db";
const collections = ["accounts","currentAccount"];
const mongojs = require("mongojs");
const database = "news_db";
const db = mongojs(database,collections);
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser());

app.use(express.static('build'));


var client_id = "6c08366188224e3fa487627b7964b6ee";

var client_secret = "312856c068854046b564c9817dcc12eb";
var redirect_uri = process.env.REDIRECT_URI || "http://localhost:5000/callback";

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
      if (error) throw error;

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
          // This will get the user's spotify data and use it to make an account for this app
        request.get(options, function(error, response, body) {

          MongoClient.connect(url,(err,db)=>{
            var dbO = db.db("heroku_08xmn3nc");
            const id = generateRandomString(10)

          var userData = {
            followers:body.followers.total,
            email:body.email,
            image:body.images[0],
            playlist:[],
            songs:[],
            artists:[],
            id:body.id
          }


          dbO.collection("accounts").find({}).toArray((err,data)=>{
            for(var i = 0; i <= data.length - 1; i++ ){

              if(data[i].id === body.id ){
                console.log(data[i])
                console.log("User already exists");

                break;
              }
              if(i >= data.length - 1){
                  dbO.collection("accounts").insertOne(userData,(e,data)=>{console.log("Insert New User")});

              }
            }



          res.redirect(`/home/${"access_token="+access_token}/${data[i].id}`);



        });




        });

      });
        // logs in the returned data
        // use the access token to access the Spotify Web API
        // we can also pass the token to the browser to make requests from there


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



app.get("/api/accounts",(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
      var dbO = db.db("heroku_08xmn3nc");
        dbO.collection("accounts").find({}).toArray((err,result)=>{

        res.json(result);
      });
    });
});


app.get("/api/current_account",(req,res)=>{
  MongoClient.connect(url,(err,db)=>{
    var dbO = db.db("heroku_08xmn3nc");
   dbO.collection("currentAccount").find({}).toArray((err,result)=>{
    res.json(result);
  });
  });
});

app.post("/api/accounts",(req,res)=>{
  MongoClient.connect(url,(err,db)=>{
    var dbO = db.db("heroku_08xmn3nc");
    var id = req.body.id;

    var newData = {
      email:req.body.email,
      displayName:req.body.email
    }
    console.log(req.params,req.body,req.body.id);
    dbO.collection("accounts").find({}).toArray((err,accounts)=>{

        for(var i =0; i<= accounts.length;i++){

          if(id === accounts[i].id){

            var newAccount = {
              email:newData.email,
              token:accounts[i].email,
              id:accounts[i].id,
              songs:accounts[i].songs,
              artists:accounts[i].artists,
              followers:0,
              image:null,
              playlist:accounts[i].playlist
            }

            dbO.collection("accounts").remove({email:accounts[i].email},(err,data)=>{console.log(data,"Removed Old Data")});
            dbO.collection("accounts").insertOne(newAccount,()=>{console.log("ll")});

          break;

          }

        }

  });
});

});



//---------------End of Oauth Spotify---------------
app.get('/*', (req, res) => {

  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port,(req,res)=>{
  MongoStartup();
  console.log(url);
  console.log("App is running on localhost:"+port);
});


app.get("/api/token",(req,res)=>{
  MongoClient.connect(url,(err,db)=>{
    var dbO = db.db("heroku_08xmn3nc");
    dbO.collection("token").find({}).toArray((err,result)=>{
        console.log(result);
        res.json(result[0]);
      });
    });
  });

app.post("/api/token",(req,res)=>{
  var token = req.body.token
  console.log(req.body);
  MongoClient.connect(url,(err,db)=>{
    var dbO = db.db("heroku_08xmn3nc");
    dbO.collection("token").insertOne({token:token});
  });
});


app.post("/api/accounts/add/song",(req,res)=>{
  MongoClient.connect(url,(err,db)=>{
    var dbO = db.db("heroku_08xmn3nc");
    dbO.collection("accounts").find({}).toArrary((err,result)=>{
      for(var i = 0; i < result.length; i++){
        if(req.body.user == result[i].token){
          var songs = result[i].songs;
          songs.push(req.body.song);
          var newUser = {
            followers:0,
            email:result[i].email,
            image:result[i].image,
            playlist:result[i].playlist,
            token:result[i].token,
            songs:songs,
            artists:result[i].artists,
            id:result[i].id
          }
          dbO.collection("accounts").remove(result[i]);
          dbO.collection("accounts").insertOne(newUser);
        }
      }
    });
  });
});


const MongoStartup = ()=>{
  MongoClient.connect(url,(err,db)=>{
    var dbO = db.db("heroku_08xmn3nc");
    dbO.collection("accounts").find({}).toArray((err,result)=>{
      console.log(result.length);
    if(result.length > 0){
      console.log("Accounts are in database");
      console.log(result[0]);
    }else{
      dbO.collection("accounts").insertOne({
        followers:0,
        email:"dum",
        image:null,
        playlist:[],
        songs:[],
        token:"dum"
        artists:[],
        id:"30o230o0303032003230ek2dodewmwecmwepcmcm"

      },(err,data)=>{
        console.log("Inserted Account");

      });
    }

  });
});
}
