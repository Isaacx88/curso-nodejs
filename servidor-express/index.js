const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Welcome to my app!");
});

app.get("/about", function(req, res){
    res.send("About me");
});

app.get('/blog', function(req, res){
    res.send("Welcome to my blog");
});

app.get('/ola/:nome/:cargo', function(req, res){
    //o send pode ser usado somente uma vez
    res.send("<h1> Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo: " + req.params.cargo + "</h2>");    

})


app.listen(8081, function(){
    console.log("Servidor online em localhost:8081");
}); //essa função deve ser a última no código