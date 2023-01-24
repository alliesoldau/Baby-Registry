import React from 'react';
import { Link } from "react-router-dom"


function UserProfile({ user }) {
    
    return (
        <>
        { user ? (
            <div className="User-Profile">
            <p>{user.username}'s Profile</p>
            <Link to={`/users/${user.id}/profile/edit`}>
                <button>Edit Profile</button>
            </Link>
            <p>First name: {user.first_name}</p>
            <p>Last name: {user.last_name}</p>
            <p>Gender: {user.gender}</p>
            <p>TO DO: make image: {user.image_url}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>Email: {user.email}</p>
        </div>
            )  :  (
            // TO DO: loading screen
            <p>No user</p>
        )}
        </>
    )
}

export default UserProfile;