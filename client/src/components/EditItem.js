import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function EditItem({ itemToEdit }) {

    const history = useHistory()

    const [claimed, setClaimed] = useState("")

    useEffect(() => { 
        if (itemToEdit.claimed === true) {
            setClaimed("claimed")
        } else {
            setClaimed("unclaimed")
        }},[])

    const [formData, setFormData] = useState({
        item_name: itemToEdit.item_name,
        price: itemToEdit.price,
        image_url: itemToEdit.image_url,
        listing_url: itemToEdit.listing_url,
        claimed: claimed,
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
            })
        } else {
            console.log("Figure out what to do with errors")       
        }
    })
}

    return (
        <div className="Edit-Item-Container">
        <p>Edit Item</p>
        <form className="Edit-Registry-Form" onSubmit={handleSubmit}>
            <div className="Form-Field">
                <label>Item Name</label>
                <input type='text' name='item_name' value={item_name} onChange={handleChange} />
            </div>
            <div className="Form-Field">
                <label>Price</label>
                <input type='text' name='price' value={price} onChange={handleChange} />
            </div>
            <div className="Form-Field">
                <label>Listing URL</label>
                <input type='text' name='listing_url' value={listing_url} onChange={handleChange} />
            </div>
            <div className="Form-Field">
                <label>Image URL</label>
                <input type='text' name='image_url' value={image_url} onChange={handleChange} />
            </div>
        <button type='submit' className="submit">Submit Item Edits</button>
        </form>
        </div>
    )
}

export default EditItem;