import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Navigation from './components/Navigation'
import UserHomePage from './components/UserHomePage'
import UserProfile from './components/UserProfile'
import MyRegistry from './components/MyRegistry'
import MyGifts from './components/MyGifts'
import AddRegistryForm from './components/AddRegistryForm'
import EditRegistry from './components/EditRegistry'
import EditProfile from './components/EditProfile'
import AddItemToRegistry from './components/AddItemToRegistry';
import EditItem from './components/EditItem';
import SearchForFriends from './components/SearchForFriends';

// styled components: https://www.smashingmagazine.com/2020/07/styled-components-react/ 

function App() {
  
  const [user, setUser] = useState(null);
  const [registry, setRegistry] = useState({});
  const [itemToEdit, setItemToEdit] = useState({});
  const [myGifts, setMyGifts] = useState([]);
  const [searchUsers, setSearchUsers] = useState([])

  function addItemToRegistry(item) {
    let updateRegistry 
    updateRegistry = {...registry, items: [...registry.items, item]}
    setRegistry(updateRegistry)
  }

  function removeItem(id) {
    let updateRegistry = {...registry}
    updateRegistry.items = updateRegistry.items.filter(item => item.id !== id)
    setRegistry(updateRegistry)
  }

  function setUpdatedItem(itemToUpdate) {
    let updateRegistry = {...registry}
    updateRegistry.items = registry.items.map((item)=>item.id === itemToUpdate.id ? itemToUpdate : item)
    setRegistry(updateRegistry)  
  }

  function surrenderItem(itemToSurrender) {
    const updateGifts = myGifts.filter((gift) => gift.id !== itemToSurrender.id)
    setMyGifts(updateGifts)
  }

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
      <div className="Body-Container">
        <Switch>

          <Route exact path='/'>
            <Home user={user}/>
          </Route>

          <Route path='/users/new'>
            <SignUp setUser={setUser}/>
          </Route>

          <Route path='/users/search'>
            <SearchForFriends searchUsers={searchUsers} setSearchUsers={setSearchUsers}/>
          </Route>

          <Route path='/users/:id/profile/edit'>
            <EditProfile user={user} setUser={setUser}/>
          </Route>

          <Route path='/users/:id/profile'>
            <UserProfile user={user} setUser={setUser}/>
          </Route>

          <Route path='/users/:id/baby_showers'>
            <MyRegistry setRegistry={setRegistry}/>
          </Route>

          <Route path='/users/:id/gifts'>
            <MyGifts myGifts={myGifts} setMyGifts={setMyGifts} surrenderItem={surrenderItem}/>
          </Route>

          <Route path='/users/:id/add_registry'>
            <AddRegistryForm />
          </Route>

          <Route path='/users/:id'>
            <UserHomePage user={user} setUser={setUser}/>
          </Route>

          <Route path='/baby_showers/:id/add_items'>
            <AddItemToRegistry registry={registry} addItemToRegistry={addItemToRegistry}/>  
          </Route>

          <Route path='/baby_showers/:id/edit'>
            <EditRegistry registry={registry} removeItem={removeItem} setItemToEdit={setItemToEdit}/>
          </Route>

          <Route path='/items/:id/edit'>
            <EditItem itemToEdit={itemToEdit} setUpdatedItem={setUpdatedItem}/>
          </Route>

          <Route path='/login'>
            <Login setUser={setUser}/>
          </Route>
        
        </Switch>
      </div>
    </div>
  )
}

export default App;
