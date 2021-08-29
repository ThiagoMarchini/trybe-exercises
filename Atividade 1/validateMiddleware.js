const validateCreateMiddleware = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ message: "invalid data" });
  }
  // username deve ter mais de 3 caracteres;
  if (username.length < 4) {
    return res.status(400).json({ message: "invalid data" });
  }

  // email deve ter o formato email@mail.com;
  // regex de: https://www.w3resource.com/javascript/form/email-validation.php
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailFormat)) {
    return res.status(400).json({ message: "invalid data" });
  }

  // password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
  const passwordFormat = /^[0-9]*$/;
  if ((!password.match(passwordFormat)) || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: "invalid data" });
  }

  next();
};

module.exports = validateCreateMiddleware;