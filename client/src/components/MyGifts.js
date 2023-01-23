import { useEffect, useState } from 'react'
import GiftDetails from './GiftDetails'
import {useParams} from 'react-router-dom'

function MyGifts() {

    const params = useParams()

    const [myGifts, setMyGifts] = useState([])

    useEffect(()=>{
        fetch(`/users/${params.id}/gifts`)
        .then(res => {
            if(res.ok){
                res.json().then(gifts => {
                    setMyGifts(gifts)    
                })
            } else {
                console.log("Figure out what to do with errors")
            }
        }) 
    },[]) 

    const giftDetails = myGifts.map((gift) => {
        return (
            <GiftDetails
                key={gift.id}
                gift={gift}
            />
        )
    })

    return (
        <div className="My-Gifts">
            {giftDetails}
        </div>
    )
}

export default MyGifts;