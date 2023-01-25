import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Form from '../styles/Form';
import FormInputLine from '../styles/FormInputLine';
import ButtonContainer from '../styles/ButtonContainer';

function SignUp({ setUser }) {
    
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
                        setUser(formData)
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
        <Form bg={"white"}>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <FormInputLine bg={"bone"}>
                    <label>Username</label> 
                    <input type='text' name='username' value={username} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine bg={"bone"}>
                    <label>Email</label> 
                    <input type='text' name='email' value={email} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine bg={"bone"}>
                    <label>Password</label> 
                    <input type='password' name='password' value={password} onChange={handleChange} />
                </FormInputLine>
                <ButtonContainer>
                    <button type='submit' className="Submit-Button">Sign Up</button>
                </ButtonContainer>
            </form>
        </Form>
    )
}

export default SignUp;