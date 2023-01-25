import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../styles/Card';

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
                <p>Item Name: {item.item_name}</p>
                <p>Price: {item.price}</p>
                <p>Claimed?: CHECK USER ID TO SEE IF ITS CLAIMED</p>
                <img src={item.image_url}/>
                <Link to={`/items/${item.id}/edit/`}>
                    <button onClick={handleSelectItem}>Edit Item</button>
                </Link>            
                <button onClick={handleDelete}>Remove Item From Registry</button>
            </Card>
        </div>
    )
}

export default RegistryItemDetails;