import React from 'react';

function GiftDetails({ gift }) {

    return (
        <div className="Gift-Details">
            <p><b>Baby Shower: {gift.baby_shower.baby_shower_name}</b></p>
            <p>Item Name: {gift.item_name}</p>
            <p>Price: {gift.price}</p>
            <p>Listing URL: {gift.listing_url}</p>
            <p>TO DO: make an image: {gift.image_url}</p>
        </div>
    )
}

export default GiftDetails;
