const topSecret = (req, res) => {
  const { admin } = req;
  if (!admin) {
    res.status(403).json({
      error: {
        message: 'Restricted access',
      },
    });
  }
  res.status(200).json({
    secretInfo: 'Peter Parker é o Homem-Aranha',
  });
};

module.exports = topSecret;
