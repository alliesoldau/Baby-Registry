import React, { useState, useEffect } from 'react';

function RegistryItemDetails({ item }) {

    const [claimed, setClaimed] = useState("")
    
    // This checks the boolean of if it's claimed or not 
    useEffect(() => { 
        if (item.claimed === true) {
            setClaimed("claimed")
        } else {
            setClaimed("unclaimed")
        }},[])

    function handleDelete() {
        // TO DO: Delete this item
        // fetch(`/item/${item.id}`, {
        //     method: 'DELETE'
        // })
    }

    return (
        <div className="Item-Details">
            <p>asdfasdfasdfasdf</p>
            <p>Item Name: {item.item_name}</p>
            <p>Price: {item.price}</p>
            <p>Claimed?: {claimed}</p>
            <p>TO DO: make an image: {item.image_url}</p>
            <button onClick={handleDelete}>Remove Item From Registry</button>

        </div>
    )
}

export default RegistryItemDetails;