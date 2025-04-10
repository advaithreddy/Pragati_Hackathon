const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { registerUser, loginUser } = require('./auth.controller');

// POST /api/auth/register
router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

// GET /api/auth/github → Redirect to GitHub login
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

// GET /api/auth/github/callback → GitHub will  redirect back here
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: req.user._id, email: req.user.email } });
  }
);

module.exports = router;
