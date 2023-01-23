import React from 'react';

function ShowerDetails({ shower }) {
    return (
        <div className="Shower-Details">
            <p>Shower Name: {shower.baby_shower_name}</p>
            <p>Date: {shower.date}</p>
            <p>Address: {shower.address}</p>
            <p>Description: {shower.description}</p>
            <p>TO DO: make an image: {shower.image_url}</p>
        </div>
    )
}

export default ShowerDetails;
