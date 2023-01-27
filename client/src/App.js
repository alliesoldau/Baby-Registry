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
import FriendsShowers from './components/FriendsShowers';

// styled components documentation: https://www.smashingmagazine.com/2020/07/styled-components-react/ 

function App() {
  
  const [user, setUser] = useState(null);
  const [registry, setRegistry] = useState({});
  const [itemToEdit, setItemToEdit] = useState({});
  const [myGifts, setMyGifts] = useState([]);
  const [searchUsers, setSearchUsers] = useState([])
  const [friendsBabyShowers, setFriendsBabyShowers] = useState([]);
  const [claimErrors, setClaimErrors] = useState([])

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
  
  function ClaimItem(itemToClaim) {
      fetch(`/items/${itemToClaim.id}/claim`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        user_id: user.id
      })
    })
    .then(res => {
      if(res.ok){
          res.json().then(item => {
            const selectedShower = {...friendsBabyShowers.find((shower) => shower.id === itemToClaim.baby_shower_id)}
            const updateShowerItems = selectedShower.items.filter((item) => item.id !== itemToClaim.id)
            selectedShower.items = updateShowerItems
            const updateShowers = friendsBabyShowers.map((shower)=> shower.id === selectedShower.id ? selectedShower : shower)
            setFriendsBabyShowers(updateShowers)
          })
      } else {
        res.json().then(data => setClaimErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))

      }
    })
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
            <SearchForFriends searchUsers={searchUsers} setSearchUsers={setSearchUsers} friendsBabyShowers={friendsBabyShowers} setFriendsBabyShowers={setFriendsBabyShowers}/>
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

          <Route path='/baby_showers/:id'>
            <FriendsShowers setFriendsBabyShowers={setFriendsBabyShowers} friendsBabyShowers={friendsBabyShowers} ClaimItem={ClaimItem} claimErrors={claimErrors}/>
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
