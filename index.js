const PORT = process.env.DATABASE_URL || 3000;
const express = require('express');
const server = express();
const morgan = require('morgan');
const { client } = require('./db');

client.connect();

server.use(morgan('dev'));
server.use(express.json())


const apiRouter = require('./api');
server.use('/api', apiRouter);

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});