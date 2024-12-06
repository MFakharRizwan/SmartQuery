const User = require("../models/User");

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('profile').select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateUserProfile = async (req, res) => {
  const { location, bio, status, skills, avatar } = req.body;
  try {
    const user = await User.findById(req.user.id).populate('profile');
    if (!user) return res.status(404).json({ message: "User not found" });

    user.profile.location = location || user.profile.location;
    user.profile.bio = bio || user.profile.bio;
    user.profile.status = status || user.profile.status;
    user.profile.skills = skills || user.profile.skills;
    user.profile.avatar = avatar || user.profile.avatar;

    await user.profile.save();
    res.json(user.profile);
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile", error });
  }
};
