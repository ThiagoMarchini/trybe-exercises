const Ping = require('../models/Ping');

const ping = () => Ping.ping();

module.exports = {
  ping,
};
