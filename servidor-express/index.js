const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Welcome to my app!");
});

app.get("/about", function(req, res){
    res.send("About me");
});

app.get("/blog", function(req, res){
    res.send("Welcome to my blog");
});


app.listen(8081, function(){
    console.log("Servidor online em localhost:8081");
}); //essa função deve ser a última no código