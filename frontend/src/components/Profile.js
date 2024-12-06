import React, { useEffect, useState } from 'react';
import authService from '../services/authServices';
import '../css/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
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

  const handleSkillsChange = (e, index) => {
    const { value } = e.target;
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      skills: updatedSkills,
    }));
  };

  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ''],
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const updatedProfile = await authService.updateProfile(formData);
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
          <h2 className="profile-name">Profile ID: {profile._id}</h2>
          <h3 className="profile-user">User ID: {profile.user}</h3>

          {isEditing ? (
            <>
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

              <div className="skills-section">
                <label>Skills:</label>
                {formData.skills.map((skill, index) => (
                  <input
                    key={index}
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillsChange(e, index)}
                    className="profile-input"
                    placeholder="Skill"
                  />
                ))}
                <button type="button" onClick={addSkill} className="add-skill-button">Add Skill</button>
              </div>
            </>
          ) : (
            <>
              <p className="profile-detail">Location: {profile.location}</p>
              <p className="profile-detail">Bio: {profile.bio}</p>
              <p className="profile-detail">Status: {profile.status}</p>
              <p className="profile-detail">Skills: {profile.skills.join(', ')}</p>
            </>
          )}

          {isEditing ? (
            <button onClick={handleSave} className="profile-button" disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="profile-button">
              Edit Profile
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;



