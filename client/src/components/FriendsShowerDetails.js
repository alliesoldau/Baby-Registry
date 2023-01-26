import React from 'react';
import ItemDetails from './ItemDetails';
import SummaryCard from '../styles/SummaryCard';
import LineItem from '../styles/LineItem';

function FriendsShowerDetails({ shower }) {

    const items = shower.items
    // TO DO: filter out items that are already claimed 
    const itemDetails = items.map((item) => {
        return (
            <ItemDetails
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <SummaryCard>
            <h2>{shower.baby_shower_name}</h2>
            <LineItem>
                <h4>Date</h4>
                <p>{shower.date}</p>
            </LineItem>
            <LineItem>
                <h4>Address</h4>
                <p>{shower.address}</p>
            </LineItem>
            <LineItem>
                <h4>Description</h4>
                <p>{shower.description}</p>
            </LineItem>
            {itemDetails}
        </SummaryCard>
    )
}

export default FriendsShowerDetails;
