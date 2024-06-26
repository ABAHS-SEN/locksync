const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['creator', 'team'],
    default: 'team',
  },
  sharedAccounts: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('User', UserSchema);
