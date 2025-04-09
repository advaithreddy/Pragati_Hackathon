const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Auth/auth.routes');
// for oauth
const passport = require('passport');
const session = require('express-session');
require('./Auth/githubStrategy');


// dotenv.config();

const app = express();
app.use(express.json()); // so we can parse JSON

app.use(session({
    secret: 'Qaz098Wsx765Edc1', // use a strong one in prod
    resave: false,
    saveUninitialized: true,
}));
  
app.use(passport.initialize());
app.use(passport.session());
  

// Routes
app.use('/api/auth', authRoutes);

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('❌ MongoDB Connection Failed:', err);
  });
