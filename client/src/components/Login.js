import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login() {

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
        <div className="Login-Container">
            <p>Login</p>
            <form className="Login-Form" onSubmit={handleSubmit}>
                <div className="Form-Field">
                    <label>Username</label>
                        <input type='text' name='username' value={username} onChange={handleChange} />
                </div>
                <div className="Form-Field">
                    <label>Password</label>
                        <input type='password' name='password' value={password} onChange={handleChange} />
                </div>
            <button type='submit' className="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;