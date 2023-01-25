import React from 'react';
import LineItem from '../styles/LineItem';
import UserDetailStyles from '../styles/UserDetailStyles';

function UserDetails({ user }) {

    return (
        <UserDetailStyles >
            <div className="Profile-Image">
                <img src={user.image_url}/>
            </div>
            <h2>{user.username}</h2>
            <h4><i>{user.first_name} {user.last_name}</i></h4>
        </UserDetailStyles>
    )
}

export default UserDetails;