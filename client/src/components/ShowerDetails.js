import React, { useState } from 'react';
import ItemDetails from './ItemDetails';

function ShowerDetails({ shower }) {

    function handleDelete() {
        fetch(`/baby_showers/${shower.id}`, {
            method: 'DELETE'
        })
        // TO DO: do a filter on the array to have the front end remove it from state 
    }

    const items = shower.items

    const itemDetails = items.map((item) => {
        return (
            <ItemDetails
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div className="Shower-Details">
            <p>Shower Name: {shower.baby_shower_name}</p>
            <button onClick={handleDelete}>Delete This Registry</button>
            <p>Date: {shower.date}</p>
            <p>Address: {shower.address}</p>
            <p>Description: {shower.description}</p>
            <p>TO DO: make an image: {shower.image_url}</p>
            {itemDetails}
        </div>
    )
}

export default ShowerDetails;
