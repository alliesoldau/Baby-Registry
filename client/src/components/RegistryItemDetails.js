import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../styles/Card';
import LineItem from '../styles/LineItem';
import ButtonContainer from '../styles/ButtonContainer';

function RegistryItemDetails({ item, removeItem, setItemToEdit }) {

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
            <Card>
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
                <img src={item.image_url}/>
                <LineItem>
                    {/* TO DO: check to see if its claimed  */}
                    {/* TO DO: change color depending on if its claimed or not? */}
                    <h4>Claimed</h4>
                    <p>CHECK TO SEE IF ITS CLAIMED</p>
                </LineItem>
                <ButtonContainer>
                    <Link to={`/items/${item.id}/edit/`}>
                        <button className="Edit-Button" onClick={handleSelectItem}>Edit Item</button>
                    </Link>            
                    <button className="Delete-Button" onClick={handleDelete}>Remove Item</button>
                </ButtonContainer>
            </Card>
        </div>
    )
}

export default RegistryItemDetails;