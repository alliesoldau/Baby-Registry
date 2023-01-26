import { useEffect, useState } from 'react'
import GiftDetails from './GiftDetails'
import {useParams} from 'react-router-dom'
import Errors from '../styles/Errors';

function MyGifts({ myGifts, setMyGifts, surrenderItem }) {

    const params = useParams()

    const [errors, setErrors] = useState([])

    useEffect(()=> {
        fetch(`/users/${params.id}/gifts`)
        .then(res => {
            if(res.ok){
                res.json().then(gifts => {
                    setMyGifts(gifts)    
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        }) 
    },[]) 

    const giftDetails = myGifts.map((gift) => {
        return (
            <GiftDetails
                key={gift.id}
                gift={gift}
                surrenderItem={surrenderItem}
            />
        )
    })

    return (
        <div className="My-Gifts">
            {giftDetails}
            { errors.length > 0 ? (
                <Errors>
                    <h4>Errors</h4>
                    {errors?errors.map(e => <p>{`● ${e.toUpperCase()}`}</p>):null}
                </Errors>
            ) : null }
        </div>
    )
}

export default MyGifts;