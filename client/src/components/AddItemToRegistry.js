import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function AddItemToRegistry({ registry, addItemToRegistry }) {

    console.log(`baby shower id: ${registry.id}`)

    const [formData, setFormData] = useState({
        item_name:'',
        price:'',
        image_url:'',
        listing_url:'',
        baby_shower_id: registry.id
    })

    const history = useHistory()

    const {item_name, price, image_url, listing_url, baby_shower_id} = formData

    // TO DO: get rid of baby shower image 

    function handleSubmit(e) {
        e.preventDefault();
        const item = {
            item_name, 
            price, 
            image_url, 
            listing_url, 
            baby_shower_id
        }
        // TO DO: Once item is added to baby shower the route is messed up. maybe add local host
        fetch(`/baby_showers/${registry.id}/add_items`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
            })
            .then(res => {
                if(res.ok){
                    res.json().then(item => {
                        history.push(`/baby_showers/${registry.id}/edit`)
                        addItemToRegistry(item)
                    })
                } else {
                    console.log("Figure out what to do with errors")
                }
            })
    }

    function handleChange (e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
            <div className="Add-Item-to-Registry-Container">
                <p>Add Item to Registry</p>
                <form onSubmit={handleSubmit}>
                    <div className="Form-Field">
                        <label>Item Name</label> 
                        <input type='text' name='item_name' value={item_name} onChange={handleChange} />
                    </div>
                    <div className="Form-Field">
                        <label>Price</label> 
                        <input type='text' name='price' value={price} onChange={handleChange} />
                    </div>
                    <div className="Form-Field">
                        <label>Image URL</label> 
                        <input type='text' name='image_url' value={image_url} onChange={handleChange} />
                    </div>
                    <div className="Form-Field">
                        <label>Listing URL</label> 
                        <input type='text' name='listing_url' value={listing_url} onChange={handleChange} />
                    </div>
                    <button type='submit' className="submit">Create Item</button>
                </form>
            </div>
        )
}

export default AddItemToRegistry;


