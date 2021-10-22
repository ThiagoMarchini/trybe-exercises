const express = require('express');
const app = express();
const http = require('http').createServer(app);

let likes = 0;
let stars = 0;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

io.on('connection', (socket) => {
  let currentLikes = 0;
  let currentStars = 0;

  socket.on('likePost', () => {
    currentLikes += 1;

    socket.emit('updateLikes', currentLikes);
  })

  socket.on('starPost', () => {
    currentStars += 1;

    socket.broadcast.emit('updateStars', currentStars);
  })
});

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});