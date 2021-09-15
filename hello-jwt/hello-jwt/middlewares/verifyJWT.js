const jwt = require('jsonwebtoken');

const secret = 'meusecrtetsupersecreto';

module.exports = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      error: {
        message: 'Token não encontrado',
      },
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    /* A variável decoded será um objeto equivalente ao seguinte:
      {
        data: {
          _id: '5e54590ba49448f7e5fa73c0',
          username: 'italssodj',
          password: 'senha123'
        },
        iat: 1582587327,
        exp: 1584774714908
      }
    */
      return res.status(200).json({ username: decoded.data.username, admin: decoded.data.admin });
  } catch (err) {
    return res.status(401).json({
      error: {
        message: err.message,
      },
    });
  }
};
