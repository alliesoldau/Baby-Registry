import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'


function UserHomePage() {

    const [user, setUser] = useState({})

    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)   
                })
            }else {
                console.log("Figure out what to do with errors")
            }
        })
    },[])

    return (
        <div className="User-Home-Page-Container">
            <p>{user.username}'s Home Page</p>
        </div>
    )
}

export default UserHomePage;