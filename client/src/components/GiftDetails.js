import React from 'react';
import Card from '../styles/Card';
import LineItem from '../styles/LineItem';
import ButtonContainer from '../styles/ButtonContainer';
// import { Container, Row, Col } from 'react-grid';

 
function GiftDetails({ gift, surrenderItem }) {

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
                console.log("Figure out what to do with errors")       
            }
        })
    }

    return (
        <div className="Gift-Details">
            {/* <Container container spacing={2}> */}
            <Card>
                <LineItem>
                    <h4>Baby Shower</h4>
                    <p>{gift.baby_shower.baby_shower_name}</p>
                </LineItem>
                <LineItem>
                    <h4>Item</h4>
                    <p>{gift.item_name}</p>
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
            {/* </Container> */}
        </div>
    )
}

export default GiftDetails;


