import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import RegistryItemDetails from './RegistryItemDetails';
import Form from '../styles/Form';
import FormInputLine from '../styles/FormInputLine';
import ButtonContainer from '../styles/ButtonContainer';
import Errors from '../styles/Errors';

function EditRegistry({ registry, removeItem, setItemToEdit }) {

    const itemDetails = registry.items.map((item) => {
        return (
            <RegistryItemDetails
                key={item.id}
                item={item}
                removeItem={removeItem}
                setItemToEdit={setItemToEdit}
            />
        )
    })

    const history = useHistory()

    const [formData, setFormData] = useState({
        baby_shower_name: registry.baby_shower_name,
        date: registry.date,
        address: registry.address,
        image_url: registry.image_url,
        description:registry.description,
        user_id: registry.user_id
    })

    const [errors, setErrors] = useState([])

    const {baby_shower_name, date, address, description, user_id} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/baby_showers/${registry.id}/edit`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      })
      .then(res => {
        if(res.ok){
            res.json().then(user => {
                history.push(`/users/${registry.user_id}/baby_showers`)
            })
        } else {
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
    })
}
    // TO DO: order registries by their id numbers so they always appear in the same order on the page? 
    // TO DO: Make the date preview with the correct date 

    return (
        <>
            <Form bg={"purple"}>
            <h2>Edit Registry</h2>
            <form className="Edit-Registry-Form" onSubmit={handleSubmit}>
                <FormInputLine>
                    <label>Baby Shower Name</label>
                    <input type='text' name='baby_shower_name' value={baby_shower_name} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine>
                    <label>Date</label>
                    <input type='date' name='date' value={date} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine>
                    <label>Address</label>
                    <input type='text' name='address' value={address} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine>
                    <label>Description</label>
                    <input type='text' name='description' value={description} onChange={handleChange} />
                </FormInputLine>
                <ButtonContainer>
                    <Link to={`/baby_showers/${registry.id}/add_items`}>
                        <button className="Edit-Button">Add Items to This Registry</button>
                    </Link>
                    <button type='submit' className="Submit-Button">Submit Edits</button>
                </ButtonContainer>
            </form>
            </Form>
            { errors.length > 0 ? (
            <Errors>
                <h4>Errors</h4>
                {errors?errors.map(e => <p>{`● ${e.toUpperCase()}`}</p>):null}
            </Errors>
            ) : null }
            <div className="Item-Details-Container">
                {itemDetails}
            </div>
        </>
    )
}

export default EditRegistry;