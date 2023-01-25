import React from 'react';
import TruncatedCard from '../styles/TruncatedCard';
import LineItem from '../styles/LineItem';

function ItemDetails({ item }) {

    return (
        <div className="Item-Details">
            <TruncatedCard>
                <LineItem>
                    <h4>Item</h4>
                    <p>{item.item_name}</p>
                </LineItem>
                <LineItem>
                    <h4>Claimed?</h4>
                    {/* TO DO: check to see if its claimed  */}
                    <p>CHECK USER ID TO SEE IF ITS CLAIMED</p>
                </LineItem>
            </TruncatedCard>
        </div>
    )
}

export default ItemDetails;