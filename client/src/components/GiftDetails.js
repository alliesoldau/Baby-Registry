import React from 'react';
import Card from '../styles/Card';
// import { Container, Row, Col } from 'react-grid';

 
function GiftDetails({ gift, surrenderItem }) {

    function handleSurrenderItem(e) {
        e.preventDefault();
        console.log(`gift: ${gift.item_name}`)
        fetch(`/items/${gift.id}/surrender`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({user_id: ''})
          })
          .then(res => {
            if(res.ok){
                res.json().then(item => {
                    console.log(`item.user_id: ${item.user_id}`)
                    surrenderItem(item)
                })
            } else {
                console.log("Figure out what to do with errors")       
            }
        })
    }

    return (
        <div className="Gift-Details">
            {/* <Container container spacing={2}> */}
            <Card>
                <p><b>Baby Shower: {gift.baby_shower.baby_shower_name}</b></p>
                <p>Item Name: {gift.item_name}</p>
                <p>Price: {gift.price}</p>
                <p><a href={gift.listing_url}>Listing</a></p>
                <img src={gift.image_url}/>
                <button onClick={handleSurrenderItem}>Surrender Item</button>
            </Card>
            {/* </Container> */}
        </div>
    )
}

export default GiftDetails;


