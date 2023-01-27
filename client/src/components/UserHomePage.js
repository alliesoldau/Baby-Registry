import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Errors from '../styles/Errors';

function UserHomePage({ user, setUser }) {

    const params = useParams()

    const [errors, setErrors] = useState([])

    useEffect(()=>{
        fetch(`/users/${params.id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)   
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
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
            <p>No user</p>
        )}
        { errors.length > 0 ? (
            <Errors>
                <h4>Errors</h4>
                {errors?errors.map(e => <p>{`● ${e.toUpperCase()}`}</p>):null}
            </Errors>
        ) : null }
        </>
    )
}



export default UserHomePage;