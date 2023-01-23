import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'

function AddRegistryForm() {
    
    const params = useParams()
    const [formData, setFormData] = useState({
        baby_shower_name:'',
        date:'',
        address:'',
        image_url:'',
        description:'',
        user_id: params.id
    })

    const history = useHistory()

    const {baby_shower_name, date, address, image_url, description, user_id} = formData

    // TO DO: get rid of baby shower image 

    function handleSubmit(e) {
        e.preventDefault();
        const registry = {
            baby_shower_name,
            date,
            address,
            image_url,
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
                    console.log("Figure out what to do with errors")
                }
            })
    }

    function handleChange (e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

    return (
        <div className="Add-Registry-Form-Container">
            <p>Add Registry</p>
            <form onSubmit={handleSubmit}>
                <div className="Form-Field">
                    <label>Baby Shower Name</label> 
                    <input type='text' name='baby_shower_name' value={baby_shower_name} onChange={handleChange} />
                </div>
                <div className="Form-Field">
                    <label>Date</label> 
                    <input type='date' name='date' value={date} onChange={handleChange} />
                </div>
                <div className="Form-Field">
                    <label>Address</label> 
                    <input type='text' name='address' value={address} onChange={handleChange} />
                </div>
                <div className="Form-Field">
                    <label>Image URL</label> 
                    <input type='text' name='image_url' value={image_url} onChange={handleChange} />
                </div>
                <div className="Form-Field">
                    <label>Description</label> 
                    <input type='text' name='description' value={description} onChange={handleChange} />
                </div>
                <button type='submit' className="submit">Create Registry</button>
            </form>
        </div>
    )
}

export default AddRegistryForm;