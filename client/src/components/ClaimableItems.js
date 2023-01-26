import React from 'react';
import TruncatedCard from '../styles/TruncatedCard';
import ButtonContainer from '../styles/ButtonContainer';
import LineItem from '../styles/LineItem';

function ClaimableItems({ item, ClaimItem }) {

    function handleClaim(e) {
        e.preventDefault();
        ClaimItem(item)
    }
    return (
        <div className="Item-Details">
            <TruncatedCard claimed="No">
                <LineItem>
                    <h4>Item</h4>
                    <p>{item.item_name}</p>
                </LineItem>
                <LineItem>
                    <h4>Price</h4>
                    <p>${item.price}</p>
                </LineItem>
                <LineItem>
                    <h4><a href={item.listing_url}>Listing Link</a></h4>
                </LineItem>
            </TruncatedCard>
            <ButtonContainer>
                    <button onClick={handleClaim} type='submit' className="Submit-Button">CLAIM ITEM</button>
            </ButtonContainer>
        </div>
    )
}

export default ClaimableItems;