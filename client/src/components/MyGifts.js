import { useEffect } from 'react'
import GiftDetails from './GiftDetails'
import {useParams} from 'react-router-dom'

function MyGifts({ myGifts, setMyGifts, surrenderItem }) {

    const params = useParams()

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
                surrenderItem={surrenderItem}
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