const jwt = require('jsonwebtoken');

const secret = 'meusecrtetsupersecreto';

const verifyUser = (username, password) => {
  if (username.length < 5 || typeof username !== 'string') return false;
  if (password.length < 5 || typeof password !== 'string') return false;
  return true;
};

const login = (req, res) => {
  const { username, password } = req.body;
  if (verifyUser(username, password)) {
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const payload = {
      username,
      admin: false,
    };

    if (username === 'admin' && password === 's3nh4S3gur4???') payload.admin = true;

    const token = jwt.sign(payload, secret, jwtConfig);

    return res.status(200).json({ token });
  }

  return res.status(422).json({ message: 'E necessário enviar o nome do usuário e senha' });
};

module.exports = login;