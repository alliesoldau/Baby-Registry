import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function RegistryItemDetails({ item, removeItem, setItemToEdit }) {

    const [claimed, setClaimed] = useState("")
    
    // This checks the boolean of if it's claimed or not 
    useEffect(() => { 
        if (item.claimed === true) {
            setClaimed("claimed")
        } else {
            setClaimed("unclaimed")
        }},[])

    function handleDelete() {
        fetch(`/items/${item.id}`, {
            method: 'DELETE'
        })
        removeItem(item.id)
    }

    function handleSelectItem() {
        setItemToEdit(item)
    }

    return (
        <div className="Registery-Item-Details">
            <p>asdfasdfasdfasdf</p>
            <p>Item Name: {item.item_name}</p>
            <p>Price: {item.price}</p>
            <p>Claimed?: {claimed}</p>
            <p>TO DO: make an image: {item.image_url}</p>
            <Link to={`/items/${item.id}/edit/`}>
                <button onClick={handleSelectItem}>Edit Item</button>
            </Link>            
        <button onClick={handleDelete}>Remove Item From Registry</button>
        </div>
    )
}

export default RegistryItemDetails;