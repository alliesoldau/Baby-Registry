import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../styles/Form';
import FormInputLine from '../styles/FormInputLine';
import ButtonContainer from '../styles/ButtonContainer';

function EditItem({ itemToEdit, setUpdatedItem }) {

    const history = useHistory()

    const [formData, setFormData] = useState({
        item_name: itemToEdit.item_name,
        price: itemToEdit.price,
        image_url: itemToEdit.image_url,
        listing_url: itemToEdit.listing_url,
        user_id: itemToEdit.user_id,
        baby_shower_id: itemToEdit.baby_shower_id
    })

    const {item_name, price, image_url, listing_url} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/items/${itemToEdit.id}/edit`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      })
      .then(res => {
        if(res.ok){
            res.json().then(item => {
                history.push(`/baby_showers/${itemToEdit.baby_shower_id}/edit`)
                setUpdatedItem(item)
            })
        } else {
            console.log("Figure out what to do with errors")       
        }
    })
}

    return (
        <Form bg={"green"}>
        <h2 className="purple">Edit Item</h2>
        <form className="Edit-Registry-Form" onSubmit={handleSubmit}>
            <FormInputLine>
                <label>Item Name</label>
                <input type='text' name='item_name' value={item_name} onChange={handleChange} />
            </FormInputLine>
            <FormInputLine>
                <label>Price</label>
                <input type='text' name='price' value={price} onChange={handleChange} />
            </FormInputLine>
            <FormInputLine>
                <label>Listing URL</label>
                <input type='text' name='listing_url' value={listing_url} onChange={handleChange} />
            </FormInputLine>
            <FormInputLine>
                <label>Image URL</label>
                <input type='text' name='image_url' value={image_url} onChange={handleChange} />
            </FormInputLine>
            <ButtonContainer>
                <button type='submit' className="Submit-Button-Purple">Submit Item Edits</button>
            </ButtonContainer>
        </form>
        </Form>
    )
}

export default EditItem;