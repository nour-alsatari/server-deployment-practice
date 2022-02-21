'use strict';

// const { start } = require("./server");

const server = require('./server.js');

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

server.start(PORT || 3001)


