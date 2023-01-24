import React from 'react';

function EditRegistry({ registry }) {

    console.log(registry)

    return (
        <div>Edit Registry</div>
    )
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
}

export default EditRegistry;