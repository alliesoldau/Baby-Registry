import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Form from '../styles/Form';
import FormInputLine from '../styles/FormInputLine';
import ButtonContainer from '../styles/ButtonContainer';

function Login({ setUser }) {

    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const history = useHistory()

    const {username, password} = formData

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        // Logs in user
        fetch(`/login`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => {
              if(res.ok){
                  res.json().then(user => {
                      history.push(`/users/${user.id}`)
                      setUser(user)
                  })
              } else {
                  console.log("Figure out what to do with errors")
              }
          })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

    return(
        <Form bg={"white"}>
            <h2>Login</h2>
            <form className="Login-Form" onSubmit={handleSubmit}>
                <FormInputLine bg={"bone"}>
                    <label>Username</label>
                    <input type='text' name='username' value={username} onChange={handleChange} />
                </FormInputLine>
                <FormInputLine bg={"bone"}>
                    <label>Password</label>
                    <input type='password' name='password' value={password} onChange={handleChange} />
                </FormInputLine>
                <ButtonContainer bg={"bone"}>
                    <button type='submit' className="Submit-Button">Login</button>
                </ButtonContainer>
            </form>
        </Form>
    )
}

export default Login;