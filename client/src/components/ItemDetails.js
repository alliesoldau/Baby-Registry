import React, { useState, useEffect } from 'react';

function ItemDetails({ item }) {

    const [claimed, setClaimed] = useState("")
    
    // This checks the boolean of if it's claimed or not 
    useEffect(() => { 
        if (item.claimed === true) {
            setClaimed("claimed")
        } else {
            setClaimed("unclaimed")
        }},[])

    return (
        <div className="Item-Details">
            <p>Item Name: {item.item_name}</p>
            <p>Price: {item.price}</p>
            <p>Claimed?: {claimed}</p>
            <p>TO DO: make an image: {item.image_url}</p>
        </div>
    )
}

export default ItemDetails;