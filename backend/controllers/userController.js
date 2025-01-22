// backend/controllers/userController.js
const multer = require('multer');
const path = require('path');
const Profile = require('../models/Profile');
const User = require('../models/User');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('profile').select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user.profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateUserProfile = [upload.single('avatar'), async (req, res) => {
  try {
    const { location, bio, status, skills } = req.body;
    const user = await User.findById(req.user.id).populate('profile');
    if (!user) return res.status(404).json({ message: "User not found" });

    const profile = user.profile;
    profile.location = location || profile.location;
    profile.bio = bio || profile.bio;
    profile.status = status || profile.status;
    profile.skills = skills ? JSON.parse(skills) : profile.skills;

    if (req.file) {
      profile.avatar = `/uploads/${req.file.filename}`;
    }

    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: "Failed to update profile" });
  }
}];
