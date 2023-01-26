import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Form from '../styles/Form';
import FormInputLine from '../styles/FormInputLine';
import ButtonContainer from '../styles/ButtonContainer';
import Errors from '../styles/Errors';

function AddRegistryForm() {
    
    const params = useParams()
    const [formData, setFormData] = useState({
        baby_shower_name:'',
        date:'',
        address:'',
        description:'',
        user_id: params.id
    })

    const history = useHistory()

    const [errors, setErrors] = useState([])


    const {baby_shower_name, date, address, description, user_id} = formData

    function handleSubmit(e) {
        e.preventDefault();
        const registry = {
            baby_shower_name,
            date,
            address,
            description, 
            user_id
        }
        fetch('/baby_showers', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(registry)
            })
            .then(res => {
                if(res.ok){
                    res.json().then(user => {
                        history.push(`/users/${params.id}/baby_showers`)
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
        <Form bg={"blue"}>
            <h2 className="blue">Add Registry</h2>
            <form onSubmit={handleSubmit}>
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
                    <button type='Submit' className="Submit-Button">Create Registry</button>
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

export default AddRegistryForm;
