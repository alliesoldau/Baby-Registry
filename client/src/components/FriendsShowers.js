import React, { useEffect, useState } from 'react'
import FriendsShowerDetails from './FriendsShowerDetails'
import { useParams } from 'react-router-dom'
import Errors from '../styles/Errors';

function FriendsShowers({ friendsBabyShowers, setFriendsBabyShowers, ClaimItem, claimErrors }) {

    const params = useParams()

    const [errors, setErrors] = useState([])

    useEffect(()=>{
        fetch(`/users/${params.id}/baby_showers`)
        .then(res => {
            if(res.ok){
                res.json().then(showers => {
                    setFriendsBabyShowers(showers) 
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        }) 
    },[])           


    const friendsBabyShowerDetails = friendsBabyShowers.map((shower) => {
        return (
            <FriendsShowerDetails
                key={shower.id}
                shower={shower}
                ClaimItem={ClaimItem}
                claimErrors={claimErrors}
            />
        )
    })

    return (
        <>
            <div className="My-Registry-Details">
                {/* here */}
                {/* TO DO: how can we make the items stack or something? */}
                {friendsBabyShowerDetails}
            </div>
            { errors.length > 0 ? (
                <Errors>
                    <h4>Errors</h4>
                    {errors?errors.map(e => <p>{`● ${e.toUpperCase()}`}</p>):null}
                </Errors>
            ) : null }
        </>
    )
}


export default FriendsShowers;