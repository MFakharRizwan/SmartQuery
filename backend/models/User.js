// backend/models/User.js
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Profile = require('./Profile');  // Import Profile model

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },  // Reference to Profile
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
