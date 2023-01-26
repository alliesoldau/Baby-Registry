import React, { useState, useEffect } from 'react';
import TruncatedCard from '../styles/TruncatedCard';
import LineItem from '../styles/LineItem';

function ItemDetails({ item }) {

    const [claimed, setClaimed] = useState("")

    useEffect(() => {
        if (item.user_id) {
            setClaimed("Yes")
        } else {
            setClaimed("No")
        }
    },[])

    return (
        <div className="Item-Details">
            <TruncatedCard claimed={claimed}>
                <LineItem>
                    <h4>Item</h4>
                    <p>{item.item_name}</p>
                </LineItem>
                <LineItem>
                    <h4>Claimed?</h4>
                    <p>{claimed}</p>
                </LineItem>
            </TruncatedCard>
        </div>
    )
}

export default ItemDetails;