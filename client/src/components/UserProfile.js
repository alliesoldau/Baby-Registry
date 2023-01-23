import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

function UserProfile() {

    const params = useParams()

    const [userDetails, setUserDetails] = useState({})

    useEffect(()=>{
        fetch(`/users/${params.id}`)
        .then(res => {
            if(res.ok){
                res.json().then(details => {
                    setUserDetails(details)    
                })
            }else {
                console.log("Figure out what to do with errors")
            }
        }) 
    },[])     

    return (
        <div className="User-Profile">
            <p>{userDetails.username}'s Profile</p>
            <p>First name: {userDetails.first_name}</p>
            <p>Last name: {userDetails.last_name}</p>
            <p>Gender: {userDetails.gender}</p>
            <p>TO DO: make image: {userDetails.image_url}</p>
            <p>City: {userDetails.city}</p>
            <p>State: {userDetails.state}</p>
            <p>Email: {userDetails.email}</p>
        </div>
    )
}

export default UserProfile;