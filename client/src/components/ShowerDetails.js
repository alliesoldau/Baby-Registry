import React from 'react';
import ItemDetails from './ItemDetails';
import { Link } from "react-router-dom"

function ShowerDetails({ shower, setRegistry }) {

    function handleDelete() {
        fetch(`/baby_showers/${shower.id}`, {
            method: 'DELETE'
        })
        // TO DO: do a filter on the array to have the front end remove it from state 
    }

    function handleEditRegistry() {
        setRegistry(shower)
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
            <Link to={`/baby_showers/${shower.id}/edit`}>
                <button onClick={handleEditRegistry}>Update This Registry</button>
            </Link>
            <p>Date: {shower.date}</p>
            <p>Address: {shower.address}</p>
            <p>Description: {shower.description}</p>
            <p>TO DO: make an image: {shower.image_url}</p>
            {itemDetails}
        </div>
    )
}

export default ShowerDetails;
