import React, { useEffect } from 'react'
import FriendsShowerDetails from './FriendsShowerDetails'
import { useParams } from 'react-router-dom'

function FriendsShowers({ friendsBabyShowers, setFriendsBabyShowers, ClaimItem }) {

    const params = useParams()

    useEffect(()=>{
        fetch(`/users/${params.id}/baby_showers`)
        .then(res => {
            if(res.ok){
                res.json().then(showers => {
                    setFriendsBabyShowers(showers) 
                    // console.log(showers)
                    // console.log(params.id)
                })
            }else {
                console.log("Figure out what to do with errors")
            }
        }) 
    },[])           

    const friendsBabyShowerDetails = friendsBabyShowers.map((shower) => {
        return (
            <FriendsShowerDetails
                key={shower.id}
                shower={shower}
                ClaimItem={ClaimItem}
            />
        )
    })

    return (
        <div className="My-Registry-Details">
            {/* here */}
            {/* TO DO: how can we make the items stack or something? */}
            {friendsBabyShowerDetails}
        </div>
    )
}


export default FriendsShowers;