import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

// TO DO: What's with all these underlines? 

function SignUp() {
    
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })

    const history = useHistory()

    const {username, email, password} = formData

    // TO DO: Need to add in a password confirmation

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            email,
            password
        }
        fetch('/users', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
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
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

    return (
        <div className="SignUp-Container">
            <p>SignUp</p>
            <form onSubmit={handleSubmit}>
                <div className="Form-Field">
                    <label>Username</label> 
                        <input type='text' name='username' value={username} onChange={handleChange} />
                </div>
                <div className="Form-Field">
                    <label>Email</label> 
                        <input type='text' name='email' value={email} onChange={handleChange} />
                </div>
                <div className="Form-Field">
                    <label>Password</label> 
                        <input type='password' name='password' value={password} onChange={handleChange} />
                </div>
                <button type='submit' className="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;