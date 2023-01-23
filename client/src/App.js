import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Navigation from './components/Navigation'
import UserHomePage from './components/UserHomePage'

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/authorized").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App-container">
    <Navigation user={user} setUser={setUser}/>
      <Switch>

        <Route exact path='/'>
          <Home user={user}/>
        </Route>

        <Route path='/users/new'>
          <SignUp />
        </Route>

        <Route path='/users/:id'>
          <UserHomePage />
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>


      
      </Switch>
    </div>
  )
}

export default App;
