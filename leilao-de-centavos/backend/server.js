const express = require('express');
const LeilaoController = require('./controllers/LeilaoController');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});
app.use(express.json());
app.use(cors());

app.use('/leilao', LeilaoController);
require('./sockets/leilao')(io);

http.listen(3001, () => console.log('Back-End Rodando na porta 3001'));