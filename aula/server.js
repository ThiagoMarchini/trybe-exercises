const net = require('net');

const server = net.createServer((connection) => {
  console.log('Cliente conectado');
  server.getConnections((err, count) => {
    console.log(`Conexões: ${count}`);
  })

  connection.on('end', () => {
    console.log('Cliente desconectado!')
  });

  // connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080!')
});