import React from 'react';
import ItemDetails from './ItemDetails';
import { Link } from "react-router-dom"
import SummaryCard from '../styles/SummaryCard';
import LineItem from '../styles/LineItem';
import ButtonContainer from '../styles/ButtonContainer';

function ShowerDetails({ shower, setRegistry }) {

    function handleDelete() {
        fetch(`/baby_showers/${shower.id}`, {
            method: 'DELETE'
        })
        // TO DO: do a filter on the array to have the front end remove it from state 
    }

    function handleEditRegistry() {
        setRegistry(shower)
    }

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
        <SummaryCard>
            <h2>{shower.baby_shower_name}</h2>
            <ButtonContainer>
                <Link to={`/baby_showers/${shower.id}/edit`}>
                    <button className="Edit-Button" onClick={handleEditRegistry}>Edit Registry</button>
                </Link>
                <button className="Delete-Button" onClick={handleDelete}>Delete Registry</button>
            </ButtonContainer>
            <LineItem>
                <h4>Date</h4>
                <p>${shower.date}</p>
            </LineItem>
            <LineItem>
                <h4>Address</h4>
                <p>{shower.address}</p>
            </LineItem>
            <LineItem>
                <h4>Description</h4>
                <p>{shower.description}</p>
            </LineItem>
            <img src={shower.image_url}/>
            {itemDetails}
        </SummaryCard>
    )
}

export default ShowerDetails;
