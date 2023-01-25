import React from 'react';

function ItemDetails({ item }) {

    return (
        <div className="Item-Details">
            <p>Item Name: {item.item_name}</p>
            <p>Price: {item.price}</p>
            <p>Claimed?:CHECK USER VALUE TO SEE IF ITS CLAIMED</p>
            <img src={item.image_url}/>
        </div>
    )
}

export default ItemDetails;