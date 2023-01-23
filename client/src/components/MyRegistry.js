import { useEffect, useState } from 'react'
import ShowerDetails from './ShowerDetails'
import {useParams} from 'react-router-dom'

function MyRegistry() {

    const params = useParams()

    const [babyShowers, setBabyShowers] = useState([])

    useEffect(()=>{
        fetch(`/users/${params.id}/baby_showers`)
        .then(res => {
            if(res.ok){
                res.json().then(showers => {
                    setBabyShowers(showers)    
                })
            }else {
                console.log("Figure out what to do with errors")
            }
        }) 
    },[])           

    const babyShowerDetails = babyShowers.map((shower) => {
        return (
            <ShowerDetails
                key={shower.id}
                shower={shower}
            />
        )
    })

    return (
        <div className="My-Registry">
            {/* TO DO: grab user name */}
            {/* <p>{user.username}'s Registry</p> */}
            {babyShowerDetails}
        </div>
    )
}

export default MyRegistry;