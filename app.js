const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/web3';

const app = express();

//useNewUrlParser evita um warning {useNewUrlParser: true}
mongoose.connect(url);
const connection = mongoose.connection;

connection.on('open', ()=> console.log('conectado...'));

app.use(express.json())

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(8081, ()=> console.log('Servidor iniciado'));