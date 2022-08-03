var somaFunc = require("./somar"); //a variável "somaFunc" recebe tudo o que tem no módulo exportado em somar.js
var subFunc = require("./subtrair");
var multFunc = require("./multiplicar");
var divFunc = require("./dividir");



console.log(somaFunc(1,2))
console.log(subFunc(1,2))
console.log(multFunc(1,2))
console.log(divFunc(1,2))
