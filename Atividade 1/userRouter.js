const express = require('express');
const router = express.Router();
const validateCreateMiddleware = require('./validateMiddleware');
const validateLoginMiddleware = require('./validateLogin');
const crypto = require('crypto');

// router.use(validateCreateMiddleware);

router.post('/register', validateCreateMiddleware, function (req, res) {
  res.status(201).json({ "message": "user created" });
});

// router.use(validateLoginMiddleware);

router.post('/login', validateLoginMiddleware, function(req,res) {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token } );
})

module.exports = router;