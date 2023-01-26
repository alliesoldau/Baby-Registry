import { useEffect, useState } from 'react'
import ShowerDetails from './ShowerDetails'
import { useHistory, useParams } from 'react-router-dom'
import Button from '../styles/Button';
import Errors from '../styles/Errors';

function MyRegistry({ setRegistry }) {

    const params = useParams()
    const history = useHistory()

    const [babyShowers, setBabyShowers] = useState([])

    const [errors, setErrors] = useState([])

    useEffect(()=>{
        fetch(`/users/${params.id}/baby_showers`)
        .then(res => {
            if(res.ok){
                res.json().then(showers => {
                    setBabyShowers(showers)    
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        }) 
    },[])           

    const babyShowerDetails = babyShowers.map((shower) => {
        return (
            <ShowerDetails
                key={shower.id}
                shower={shower}
                setRegistry={setRegistry}
            />
        )
    })

    function handleRouteToNewRegistryForm() {
        history.push(`/users/${params.id}/add_registry`)
    }

    return (
        <div className="My-Registry">
            <Button>
                <button className="Create-Babyshower-Button" onClick={handleRouteToNewRegistryForm}>Create New Registry</button>
            </Button>
            <div className="My-Registry-Details">
                {/* TO DO: how can we make the items stack or something? */}
                {babyShowerDetails}
            </div>
            { errors.length > 0 ? (
                <Errors>
                    <h4>Errors</h4>
                    {errors?errors.map(e => <p>{`● ${e.toUpperCase()}`}</p>):null}
                </Errors>
            ) : null }
        </div>
    )
}

export default MyRegistry;