const ping = require('./ping');
const upload = require('./upload');
const multiple = require('./multiple');
const { profile, getProfile } = require('./profile');

module.exports = {
  getProfile,
  multiple,
  ping,
  profile,
  upload,
};
