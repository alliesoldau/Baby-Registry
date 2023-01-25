import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'

function UserHomePage({ user, setUser }) {

    const params = useParams()

    useEffect(()=>{
        fetch(`/users/${params.id}`)
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
        <>
        { user ? (
            <div className="Home-Page">
                <h1>{user.username}'s Home Page</h1>
            </div>
            )  :  (
            // TO DO: loading screen
            <p>No user</p>
        )}
        </>
    )
}



export default UserHomePage;