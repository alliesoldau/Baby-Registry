import React from 'react';

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
            <p><b>Baby Shower: {gift.baby_shower.baby_shower_name}</b></p>
            <p>Item Name: {gift.item_name}</p>
            <p>Price: {gift.price}</p>
            <p>Listing URL: {gift.listing_url}</p>
            <p>TO DO: make an image: {gift.image_url}</p>
            <button onClick={handleSurrenderItem}>Surrender Item</button>
        </div>
    )
}

export default GiftDetails;
