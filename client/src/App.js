import { Route, Switch } from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
    <GlobalStyle />
    <Navigation/>
      <Switch>

      <Route path='/users/new'>
        <SignUp />
      </Route>

      <Route path='/login'>
        <Login/>
      </Route>
      
      </Switch>
    </>
  )
}

export default App;

const GlobalStyle = createGlobalStyle`
    body{
      background-color: black; 
      color:white;
    }
    `
