const validateLoginMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (!password || !email) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  // email deve ter o formato email@mail.com;
  // regex de: https://www.w3resource.com/javascript/form/email-validation.php
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailFormat)) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  // password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
  const passwordFormat = /^[0-9]*$/;
  if ((!password.match(passwordFormat)) || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  next();
};

module.exports = validateLoginMiddleware;