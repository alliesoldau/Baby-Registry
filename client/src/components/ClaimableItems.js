import React from 'react';
import TruncatedCard from '../styles/TruncatedCard';
import ButtonContainer from '../styles/ButtonContainer';
import LineItem from '../styles/LineItem';
import Errors from '../styles/Errors';

function ClaimableItems({ item, ClaimItem, claimErrors }) {

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
            { claimErrors.length > 0 ? (
            <Errors>
                <h4>Errors</h4>
                {claimErrors?claimErrors.map(e => <p>{`● ${e.toUpperCase()}`}</p>):null}
            </Errors>
        ) : null }
        </div>
    )
}

export default ClaimableItems;