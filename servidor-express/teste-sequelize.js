const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Qwerty123', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: ", erro);
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT 
    }
})

// Postagem.sync({force:true})
// Postagem.create({
//     titulo: "Titulo qualquer",
//     conteudo: "Um conteudo qualquer"
// })


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force:true})
Usuario.create({
    nome: "Isaac",
    sobrenome: "Barros",
    idade: 24,
    email: "isaac@mail.com"
})