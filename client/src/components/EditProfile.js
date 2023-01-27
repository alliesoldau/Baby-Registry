import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Form from '../styles/Form';
import FormInputLine from '../styles/FormInputLine';
import Button from '../styles/Button';
import Errors from '../styles/Errors';

function EditProfile({ user, setUser }) {

    const history = useHistory()

    const [formData, setFormData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        gender: user.gender,
        image_url: user.image_url,
        city: user.city,
        state: user.state,
        email: user.email
    })

    const [errors, setErrors] = useState([])

    const {first_name, last_name, gender, city, state, email} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
     
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/users/${user.id}/profile/edit`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      })
      .then(res => {
        if(res.ok){
            res.json().then(user => {
                history.push(`/users/${user.id}/profile`)
                setUser(user)
            })
        } else {
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
    })
}

    return (
        <>
            <Form bg={"pink"}>
            <h2>Edit Profile</h2>
            <form className="Edit-Profile-Form" onSubmit={handleSubmit}>
                <FormInputLine>
                    <label>First Name</label>
                    <input type='text' name='first_name' value={first_name} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine>
                    <label>Last Name</label>
                    <input type='text' name='last_name' value={last_name} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine>
                    <label>Gender</label>
                    <input type='text' name='gender' value={gender} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine>
                    <label>City</label>
                    <input type='text' name='city' value={city} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine>
                    <label>State</label>
                    <input type='text' name='state' value={state} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine>
                    <label>Email</label>
                    <input type='text' name='email' value={email} onChange={handleChange} />
                </FormInputLine>
                <Button>
                    <button type='submit' className="Submit-Button">Submit Edits</button>
                </Button>
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

export default EditProfile;