import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from '../styles/Card';
import LineItem from '../styles/LineItem';
import ButtonContainer from '../styles/ButtonContainer';

function RegistryItemDetails({ item, removeItem, setItemToEdit }) {

    const [claimed, setClaimed] = useState("")

    useEffect(() => {
        if (item.user_id) {
            setClaimed("Yes")
        } else {
            setClaimed("No")
        }
    },[])
    
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
            <Card claimed={claimed}>
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
                    <h4>Claimed?</h4>
                    <p>{claimed}</p>
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