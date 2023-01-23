import React from 'react';

function ItemDetails({ item }) {

    return (
        <div className="Item-Details">
            <p>Item Name: {item.item_name}</p>
            <p>Price: {item.price}</p>
            <p>TO DO: make an image: {item.image_url}</p>
        </div>
    )
}

export default ItemDetails;