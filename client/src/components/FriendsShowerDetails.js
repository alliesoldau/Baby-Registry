import React from 'react';
import ClaimableItems from './ClaimableItems';
import SummaryCard from '../styles/SummaryCard';
import LineItem from '../styles/LineItem';

function FriendsShowerDetails({ shower, ClaimItem, claimErrors }) {

    const items = shower.items

    const filteredItems = items.filter(item => item.user_id === null)

    const itemDetails = filteredItems.map((item) => {
        return (
            <ClaimableItems
                key={item.id}
                item={item}
                ClaimItem={ClaimItem}
                claimErrors={claimErrors}
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
