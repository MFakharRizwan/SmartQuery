// frontend/src/components/Profile.js
import React, { useEffect, useState } from 'react';
import authService from '../services/authServices';
import '../css/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await authService.getProfile();
        setProfile(data);
        setFormData({
          location: data.location || '',
          bio: data.bio || '',
          status: data.status || '',
          skills: data.skills || [],
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch profile.');
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSave = async () => {
    setLoading(true);
    const form = new FormData();
    form.append('location', formData.location);
    form.append('bio', formData.bio);
    form.append('status', formData.status);
    form.append('skills', JSON.stringify(formData.skills));
    if (imageFile) {
      form.append('avatar', imageFile);
    }

    try {
      const updatedProfile = await authService.updateProfile(form);
      setProfile(updatedProfile);
      setIsEditing(false);
      setLoading(false);
    } catch (error) {
      setError('Failed to save profile data');
      setLoading(false);
    }
  };

  return (
    <div className="profile-card">
      {loading ? (
        <p>Loading profile...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="profile-content">
          <img src={profile.avatar || 'default-avatar.jpg'} alt="Profile" className="profile-avatar" />

          {isEditing ? (
            <>
              <input type="file" onChange={handleFileChange} className="profile-input" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="profile-input"
                placeholder="Location"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="profile-input"
                placeholder="Bio"
              />
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="profile-input"
                placeholder="Status"
              />

              <button onClick={handleSave} className="profile-button" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>
            </>
          ) : (
            <>
              <p>Location: {profile.location}</p>
              <p>Bio: {profile.bio}</p>
              <p>Status: {profile.status}</p>
              <button onClick={() => setIsEditing(true)} className="profile-button">
                Edit Profile
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;



