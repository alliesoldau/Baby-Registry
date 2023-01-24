import React from 'react';
import { Link, useHistory } from "react-router-dom"

function UserProfile({ user, setUser }) {

    const history = useHistory()

    function handleDelete() {
        fetch(`/delete_account/${user.id}`, {
            method: 'DELETE'
        })
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              history.push("/")
              setUser(null);
            }
          })
    }
    
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
            <button onClick={handleDelete}>Delete My Profile</button>
        </div>
            )  :  (
            // TO DO: loading screen
            <p>No user</p>
        )}
        </>
    )
}

export default UserProfile;