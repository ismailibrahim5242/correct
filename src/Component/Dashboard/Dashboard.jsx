import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Dashboard.css'; // Import CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();

  // Retrieve the signed-up user data from localStorage
  const [user, setUser] = useState({
    name: '',
    profilePicture: ''
  });

  const [newProfilePicture, setNewProfilePicture] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('signupForm'));
    if (savedUser) {
      setUser({
        name: `${savedUser.firstName} ${savedUser.lastName}`,
        profilePicture: savedUser.profilePicture || ''
      });
    }
  }, []);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedUser = { ...user, profilePicture: e.target.result };
        setUser(updatedUser);
        localStorage.setItem('signupForm', JSON.stringify(updatedUser)); // Save updated profile picture
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProfilePicture = () => {
    const updatedUser = { ...user, profilePicture: '' };
    setUser(updatedUser);
    localStorage.setItem('signupForm', JSON.stringify(updatedUser)); // Remove profile picture from localStorage
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      {/* Navbar section */}
      <nav className="navbar">
        <h1>School Dashboard</h1>
        <div className="user-info">
          <span>{user.name}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Profile section */}
      <div className="profile-section">
        <h2>Welcome, {user.name}</h2>
        <div className="profile-picture">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" className="profile-img" />
          ) : (
            <p>No profile picture uploaded</p>
          )}
        </div>
        <input type="file" onChange={handleProfilePictureChange} />
        {user.profilePicture && (
          <button onClick={handleDeleteProfilePicture} className="delete-btn">
            Delete Picture
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
