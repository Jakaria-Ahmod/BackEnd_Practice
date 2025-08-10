const emaiValid = require('../helpers/emailValid.js');
const User = require('../models/registion.model.js');
const bcrypt = require('bcrypt');
const {
  jsonwebtokenGenrator,
  jsonweRfreshGenrator,
} = require('../utils/jwt-utils.js');

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(404).json({ message: 'Pliese Enter Your Name' });
    }
    if (!email) {
      return res.status(404).json({ message: 'Pliese Enter Your email' });
    }
    if (!password) {
      return res.status(404).json({ message: 'Pliese Enter Your password' });
    }

    if (!emaiValid(email))
      return res.status(404).json({ mesage: 'Pliese Enter Your valid Email' });

    const emailExit = await User.findOne({ email });

    if (emailExit)
      return res.status(403).json({ message: 'Email Alredy Exit' });

    const hasPassword = await bcrypt.hash(password, 10);

    const newUser = await User({
      name,
      email,
      password: hasPassword,
    });
    await newUser.save();

    const payload = { id: newUser._id.toString() };

    const Token = jsonwebtokenGenrator(payload);
    const refreshToken = jsonweRfreshGenrator(payload);

    res;

    res.status(200).json({
      secess: true,
      message: 'user create sucessfully ',
      user: newUser,
      Token: Token,
      refreshToken: refreshToken,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = registerController;
