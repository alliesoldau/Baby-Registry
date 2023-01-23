import React from 'react';
import ItemDetails from './ItemDetails'
function ShowerDetails({ shower }) {

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
            <p>Date: {shower.date}</p>
            <p>Address: {shower.address}</p>
            <p>Description: {shower.description}</p>
            <p>TO DO: make an image: {shower.image_url}</p>
            {itemDetails}
        </div>
    )
}

export default ShowerDetails;
