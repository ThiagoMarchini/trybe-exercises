const PingService = require('../services/Ping');

const ping = (_req,res) => {
  const response = PingService.ping();

  res.status(200).json(response);
}

module.exports = {
  ping,
};
