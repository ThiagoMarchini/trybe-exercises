const { increasePrice, findById } = require("../models/produto");

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('increasePrice', async({ id }) => {
      console.log(`Product id: ${id}`);
      await increasePrice(id)
      const produto = await findById(id)
      io.emit('refreshPrice', produto )
    });
  });
}
