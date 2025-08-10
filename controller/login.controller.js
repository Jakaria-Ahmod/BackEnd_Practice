const User = require('../models/registion.model');
const bcrypt = require('bcrypt');
const {
  jsonwebtokenGenrator,
  jsonweRfreshGenrator,
} = require('../utils/jwt-utils');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({ message: 'Pliese Enter Your Password and email' });
  }

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ message: 'User not found ' });

  const isPassword = await bcrypt.compare(password, user.password);

  if (!isPassword)
    return res.status(401).json({ message: 'password not match ' });

  const acessToken = jsonwebtokenGenrator({ user });
  const refreshToken = jsonweRfreshGenrator({ user });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // https এ কাজ করবে
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 দিন (refresh token এর জন্য)
  });

  res.status(200).json({
    message: 'Login sucessfuly',
    user: user,
    acessToken: acessToken,
    refreshToken: refreshToken,
  });
};

module.exports = loginController;
