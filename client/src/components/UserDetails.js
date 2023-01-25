import React from 'react';
import { Link } from 'react-router-dom'
import UserDetailStyles from '../styles/UserDetailStyles';

function UserDetails({ user }) {

    return (
        <Link to={`/baby_showers/${user.id}`}>
            <UserDetailStyles >
                <div className="Profile-Image">
                    <img src={user.image_url}/>
                </div>
                <h2>{user.username}</h2>
                <h4><i>{user.first_name} {user.last_name}</i></h4>
            </UserDetailStyles>        
        </Link> 
    )
}

export default UserDetails;