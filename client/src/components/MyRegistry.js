import { useEffect, useState } from 'react'
import ShowerDetails from './ShowerDetails'
import { useHistory, useParams } from 'react-router-dom'

function MyRegistry() {

    const params = useParams()
    const history = useHistory()

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

    function handleRouteToNewRegistryForm() {
        history.push(`/users/${params.id}/add_registry`)
    }

    return (
        <div className="My-Registry">
            <div className="Create-Babyshower-Button">
                <button onClick={handleRouteToNewRegistryForm}>Create New Registry</button>
            </div>
            <div className="My-Registry-Details">
                {babyShowerDetails}
            </div>
        </div>
    )
}

export default MyRegistry;