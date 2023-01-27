import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../styles/Form';
import FormInputLine from '../styles/FormInputLine';
import ButtonContainer from '../styles/ButtonContainer';
import Errors from '../styles/Errors';

function AddItemToRegistry({ registry, addItemToRegistry }) {

    const [errors, setErrors] = useState([])

    const [formData, setFormData] = useState({
        item_name:'',
        price:'',
        image_url:'',
        listing_url:'',
        baby_shower_id: registry.id
    })

    const history = useHistory()

    const {item_name, price, image_url, listing_url, baby_shower_id} = formData
    
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
                    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
                }
            })
    }

    function handleChange (e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <>
            <Form bg={"purple"}>
                <h2>Add Item to Registry</h2>
                <form onSubmit={handleSubmit}>
                    <FormInputLine>
                        <label>Item Name</label> 
                        <input type='text' name='item_name' value={item_name} onChange={handleChange} />
                    </FormInputLine>
                    <FormInputLine>
                        <label>Price</label> 
                        <input type='text' name='price' value={price} onChange={handleChange} />
                    </FormInputLine>
                    <FormInputLine>
                        <label>Image URL</label> 
                        <input type='text' name='image_url' value={image_url} onChange={handleChange} />
                    </FormInputLine>
                    <FormInputLine>
                        <label>Listing URL</label> 
                        <input type='text' name='listing_url' value={listing_url} onChange={handleChange} />
                    </FormInputLine>
                    <ButtonContainer>
                        <button type='submit' className="Submit-Button">Create Item</button>
                    </ButtonContainer>
                </form>
            </Form>
            { errors.length > 0 ? (
                <Errors>
                    <h4>Errors</h4>
                    {errors?errors.map(e => <p>{`● ${e.toUpperCase()}`}</p>):null}
                </Errors>
            ) : null }
        </>
    )
}

export default AddItemToRegistry;


