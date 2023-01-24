import React, { useState } from 'react';

function EditRegistry({ registry }) {

    console.log(registry)

    // function handleEdit(e) {
//     e.preventDefault();
//     fetch(`/baby_showers/${shower.id}`,{
//         method:'PATCH',
//         headers: {'Content-Type': 'application/json'},
//         body:JSON.stringify(formData)
//       })
//       .then(res => {
//         if(res.ok){
//           res.json().then(updateProduction)
//         } else {
//           //Display errors
//           res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//         }
//       })
// }

    const [formData, setFormData] = useState({
        baby_shower_name: registry.baby_shower_name,
        date: registry.date,
        address: registry.address,
        image_url: registry.image_url,
        description:registry.description,
        user_id: registry.user_id
    })

    const {baby_shower_name, date, address, image_url, description, user_id} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
    }

    // TO DO: Make the date preview with the correct date 
    
    return (
        <div className="Edit-Registry-Container">
        <p>Edit Registry</p>
        <form className="Edit-Registry-Form" onSubmit={handleSubmit}>
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
        <button type='submit' className="submit">Submit Edits</button>
        </form>
    </div>
    )

}

export default EditRegistry;