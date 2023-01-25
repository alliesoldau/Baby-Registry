import React from 'react';
import LineItem from '../styles/LineItem';
import UserDetailStyles from '../styles/UserDetailStyles';

function UserDetails({ user }) {

    return (
        <UserDetailStyles >
            <div className="Profile-Image">
                <img src={user.image_url}/>
            </div>
            <h4>{user.username}'s Profile</h4>
            <LineItem>
                <h4>First name</h4>
                <p>{user.first_name}</p>
            </LineItem>
            <LineItem>
                <h4>Last name</h4>
                <p>{user.last_name}</p>
            </LineItem>
        </UserDetailStyles>
    )
}

export default UserDetails;