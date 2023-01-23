import React from 'react';

function UserProfile( {user} ) {
    return (
        <div className="User-Profile">
            <p>{user.username}'s Profile</p>
            <p>First name: {user.first_name}</p>
            <p>Last name: {user.last_name}</p>
            <p>Gender: {user.gender}</p>
            <p>TO DO: make image: {user.image_url}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default UserProfile;