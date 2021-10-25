const io = require('socket.io-client');

const client = io('http://localhost:3000');

export default client;