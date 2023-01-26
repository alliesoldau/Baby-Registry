import React, { useState } from 'react';
import Card from '../styles/Card';
import LineItem from '../styles/LineItem';
import ButtonContainer from '../styles/ButtonContainer';
import Errors from '../styles/Errors';

function GiftDetails({ gift, surrenderItem }) {

    const [errors, setErrors] = useState([])

    function handleSurrenderItem(e) {
        e.preventDefault();
        console.log(`gift: ${gift.item_name}`)
        fetch(`/items/${gift.id}/surrender`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({user_id: ''})
          })
          .then(res => {
            if(res.ok){
                res.json().then(item => {
                    console.log(`item.user_id: ${item.user_id}`)
                    surrenderItem(item)
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }

    return (
        <div className="Gift-Details">
            <Card>
                <LineItem>
                    <h4>Item</h4>
                    <p>{gift.item_name}</p>
                </LineItem>
                <LineItem>
                    <h4>Baby Shower</h4>
                    <p>{gift.baby_shower.baby_shower_name}</p>
                </LineItem>
                <LineItem>
                    <h4>Price</h4>
                    <p>${gift.price}</p>
                </LineItem>
                <LineItem>
                    <h4><a href={gift.listing_url}>Listing Link</a></h4>
                </LineItem>
                <img src={gift.image_url}/>
                <ButtonContainer>
                    <button className="Delete-Button" onClick={handleSurrenderItem}>Surrender Item</button>
                </ButtonContainer>
            </Card>
            { errors.length > 0 ? (
                <Errors>
                    <h4>Errors</h4>
                    {errors?errors.map(e => <p>{`● ${e.toUpperCase()}`}</p>):null}
                </Errors>
            ) : null }
        </div>
    )
}

export default GiftDetails;


