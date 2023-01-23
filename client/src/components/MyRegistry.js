import { useEffect, useState } from 'react'
import ShowerDetails from './ShowerDetails'

function MyRegistry( {user} ) {

    const [babyShowers, setBabyShowers] = useState([])

    useEffect(()=>{
        fetch(`/baby_showers/${user.id}`)
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

    console.log(babyShowers)            


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
            <p>{user.username}'s Registry</p>
            {babyShowerDetails}
        </div>
    )
}

export default MyRegistry;