const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  location: { type: String, default: '' },
  bio: { type: String, default: '' },
  status: { type: String, default: 'Developer' },
  skills: { type: [String], default: [] },
  avatar: { type: String, default: 'default-avatar.jpg' },
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
