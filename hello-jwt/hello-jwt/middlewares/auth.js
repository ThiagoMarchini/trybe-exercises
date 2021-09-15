const jwt = require('jsonwebtoken');

const secret = 'meusecrtetsupersecreto';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      error: { message: 'Token não encontrado' },
    });
  }
  try {
    const decoded = jwt.verify(token, secret);
    res.admin = false;
    if (decoded.data.admin === true) res.admin = true;
    return next();
  } catch (err) {
    return res.status(401).json({
      error: { message: err.message,
      },
    });
  }
};
