import React from 'react';
import { Link, useHistory } from "react-router-dom"
import Profile from '../styles/Profile';

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
            <Profile>
                <div className="Profile-Image">
                <img src={user.image_url}/>
                </div>
                <h2>{user.username}'s Profile</h2>
                <div className="Line-Item">
                    <h4>First name</h4>
                    <p>{user.first_name}</p>
                </div>
                <div className="Line-Item">
                    <h4>Last name</h4>
                    <p>{user.last_name}</p>
                </div>
                <div className="Line-Item">
                    <h4>Gender</h4>
                    <p>{user.gender}</p>
                </div>
                <div className="Line-Item">
                    <h4>City</h4>
                    <p>{user.city}</p>
                </div>
                <div className="Line-Item">
                    <h4>State</h4>
                    <p>{user.state}</p>
                </div>
                <div className="Line-Item">
                    <h4>Email</h4>
                    <p>{user.email}</p>
                </div>
                <div className="Button-Container">
                <Link to={`/users/${user.id}/profile/edit`}>
                    <button className="Edit-Button">Edit Profile</button>
                </Link>
                <button className="Delete-Button" onClick={handleDelete}>Delete My Profile</button>
                </div>
            </Profile>
        ) : null } 
        </>
    )
}

export default UserProfile;