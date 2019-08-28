const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const request = require("request");
const database = "news_db";
const collections = ["accounts"];

const mongojs = require("mongojs");
const db = mongojs(database,collections);
const app = express();
const port = 5000;

app.use(bodyParser());


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


app.get("/",(req,res)=>{
  request.get("https://cnn.com",(err,data,html)=>{
      const $ = cheerio.load();

      console.log($(html).find().text(),"ll");
  });

});

app.get("/api/accounts",(req,res)=>{
  db.accounts.find({},(err,data)=>{
    res.json(data);

  });
});
