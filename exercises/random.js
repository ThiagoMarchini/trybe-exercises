const generateRandom = () => {
  const random = Math.round(Math.random() * 100)
  return random;
}

module.exports = { generateRandom };