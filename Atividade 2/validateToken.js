const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  // O token deve ser uma string de 12 caracteres contendo letras e/ou números.
  const tokenFormat = /([0-9][a-zA-z]*)*$/;
  if (!authorization.match(tokenFormat) || authorization.length !== 12) {
    res.status(401).json({ message: "invalid token" });
  }

  next();
}

module.exports = validateToken;