const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const connectDB = require('../config/db');

connectDB();

const registerUser = async (req, res) => {
  const { username, name, age, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ username, name, age, email, password: hashedPassword });
    await user.save();

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true }).status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true }).json({ msg: 'Logged in successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const shareAccount = async (req, res) => {
  const { email, account } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    if (!user.sharedAccounts.includes(account)) {
      user.sharedAccounts.push(account);
      await user.save();
    }

    res.status(200).json({ msg: 'Account shared successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
  
};

const viewSharedAccounts = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json({ sharedAccounts: user.sharedAccounts });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const revokeAccount = async (req, res) => {
  const { email, account } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    user.sharedAccounts = user.sharedAccounts.filter(acc => acc !== account);
    await user.save();

    res.status(200).json({ msg: 'Account access revoked successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { registerUser, loginUser, shareAccount, viewSharedAccounts, revokeAccount };







