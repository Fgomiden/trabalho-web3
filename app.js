//Importa express e mongoose
const express = require('express');
const mongoose = require('mongoose');

//Endereço local do MongoDB 
const url = 'mongodb://localhost/web3';

//Utilizar o express
const app = express();

//Conectar com o Mongoose
mongoose.connect(url);
const connection = mongoose.connection;

//Abre a conexão
connection.on('open', ()=> console.log('conectado...'));

//Definir o tipo da representação do recurso como JSON
app.use(express.json())

//Define a rota de usuários
const userRouter = require('./routes/users');
app.use('/users', userRouter);

//Escuta a porta 8081
app.listen(8081, ()=> console.log('Servidor iniciado'));