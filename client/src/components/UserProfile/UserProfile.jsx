import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Perform save logic here
        setIsEditing(false);
    };

    return (
        <div className="card">
            <div className="profile-icon">
                {/* User profile icon */}
            </div>
            <div className="user-details">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                        <input
                            type="number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <label>First Name</label>
                        <p>{firstName}</p>
                        <label>Last Name</label>
                        <p>{lastName}</p>
                        <label>Email</label>
                        <p>Email</p>
                        <label>BirthDate</label>
                        <p>{birthdate}</p>
                        <label>Phone Number</label>
                        <p>{phoneNumber}</p>
                    </>
                )}
            </div>
            <div className="edit-btn">
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={handleEdit}>Edit</button>
                )}
            </div>
        </div>
    );
};

export default UserProfile;