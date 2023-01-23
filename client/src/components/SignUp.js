import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function SignUp() {

    let history = useHistory()
    
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:""
    })

    function handleSubmit(e) {
    e.preventDefault();
    fetch('/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            username: formData.username
        }),
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/users/${user.id}`)
                })
            } else {
                console.log("Figure out what to do with errors")
            }
        })
    }

    function handleChange (e) {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
      }

    return (
        <div className="SignUp-Container">
            <p>SignUp</p>
            <form onSubmit={handleSubmit}>
                <div className="Form-Field">
                    <label>Username</label> 
                    <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange} 
                    />
                </div>
                <div className="Form-Field">
                    <label>Email</label> 
                    <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange} 
                    />
                </div>
                <div className="Form-Field">
                    <label>Password</label> 
                    <input 
                        type="text" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange} 
                    />
                </div>
                <button type='submit' className="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;