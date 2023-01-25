import React from 'react';
import { Link, useHistory } from "react-router-dom"
import Profile from '../styles/Profile';
import LineItem from '../styles/LineItem';
import ButtonContainer from '../styles/ButtonContainer';

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
                <LineItem>
                    <h4>First name</h4>
                    <p>{user.first_name}</p>
                </LineItem>
                <LineItem>
                    <h4>Last name</h4>
                    <p>{user.last_name}</p>
                </LineItem>
                <LineItem>
                    <h4>Gender</h4>
                    <p>{user.gender}</p>
                </LineItem>
                <LineItem>
                    <h4>City</h4>
                    <p>{user.city}</p>
                </LineItem>
                <LineItem>
                    <h4>State</h4>
                    <p>{user.state}</p>
                </LineItem>
                <LineItem>
                    <h4>Email</h4>
                    <p>{user.email}</p>
                </LineItem>
                <ButtonContainer>
                    <Link to={`/users/${user.id}/profile/edit`}>
                        <button className="Edit-Button">Edit Profile</button>
                    </Link>
                    <button className="Delete-Button" onClick={handleDelete}>Delete My Profile</button>
                </ButtonContainer>
            </Profile>
        ) : null } 
        </>
    )
}

export default UserProfile;