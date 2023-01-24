import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

function EditProfile({ user }) {

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

    const {first_name, last_name, gender, city, state, email} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // TO DO: set state to to immediately show profile update to front end
     
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        fetch(`/users/${user.id}/profile/edit`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      })
      .then(res => {
        if(res.ok){
            res.json().then(user => {
                console.log(user)
                history.push(`/users/${user.id}/profile`)
            })
        } else {
            console.log("Figure out what to do with errors")       
        }
    })
}

    return (
        <div className="Edit-Profile-Container">
        <p>Edit Profile</p>
        <form className="Edit-Profile-Form" onSubmit={handleSubmit}>
            <div className="Form-Field">
                <label>First Name</label>
                <input type='text' name='first_name' value={first_name} onChange={handleChange} />
            </div>
            <div className="Form-Field">
                <label>Last Name</label>
                <input type='text' name='last_name' value={last_name} onChange={handleChange} />
            </div>
            <div className="Form-Field">
                <label>Gender</label>
                <input type='text' name='gender' value={gender} onChange={handleChange} />
            </div>
            <div className="Form-Field">
                <label>City</label>
                <input type='text' name='city' value={city} onChange={handleChange} />
            </div>
            <div className="Form-Field">
                <label>State</label>
                <input type='text' name='state' value={state} onChange={handleChange} />
            </div>
            <div className="Form-Field">
                <label>Email</label>
                <input type='text' name='email' value={email} onChange={handleChange} />
            </div>
        <button type='submit' className="submit">Submit Edits</button>
        </form>
    </div>
    )
}

export default EditProfile;