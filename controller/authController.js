const User = require('../models/User');
const bcrypt = require('bcrypt');
const emaiValid = require('../helpers/emailValid');
const {
  jsonwebtokenGenrator,
  jsonweRfreshGenrator,
} = require('../utils/jwt-utils');

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Please Enter Your Name' });
    }
    if (!email) {
      return res.status(400).json({ message: 'Please Enter Your email' });
    }
    if (!password) {
      return res.status(400).json({ message: 'Please Enter Your password' });
    }

    if (!emaiValid(email))
      return res.status(400).json({ message: 'Please Enter Your valid Email' });

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

    res.status(200).json({
      success: true,
      message: 'user created successfully',
      user: newUser,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Please Enter Your Password and email' });
  }

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ message: 'User not found ' });

  const isPassword = await bcrypt.compare(password, user.password);

  if (!isPassword)
    return res.status(401).json({ message: 'password not match ' });

  const payloadUser = { id: user._id, email: user.email, name: user.name };

  const acessToken = jsonwebtokenGenrator({ payloadUser });
  const refreshToken = jsonweRfreshGenrator({ payloadUser });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // https এ কাজ করবে
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 দিন (refresh token এর জন্য)
  });

  res.status(200).json({
    message: 'Login successfully',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    accessToken: acessToken,
  });
};

const allUserController = async (req, res) => {
  try {
    const allUser = await User.find();
    return res
      .status(200)
      .json({ message: 'user get all sucessfully', allUser });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

const singleUserController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'id is required' });
    }
    const singleUser = await User.findOne({ _id: id });

    if (!singleUser) {
      return res.status(404).json({ message: 'user not found' });
    }
    return res.status(200).json({ message: 'user get success', singleUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(401).json({ message: 'id is required' });
    }

    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).json({ message: 'user not found' });
    }
    return res
      .status(200)
      .json({ message: 'user deleted successfully', deleteUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'id is required' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true },
    );
    if (!updatedUser) {
      return res.status(400).json({ message: 'user not found' });
    }
    return res
      .status(200)
      .json({ message: 'user updated successfully', updatedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerController,
  loginController,
  allUserController,
  singleUserController,
  deleteUserController,
  updateUserController,
};
