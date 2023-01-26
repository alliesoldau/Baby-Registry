import React, { useState, useEffect } from 'react';
import ButtonContainer from '../styles/ButtonContainer'
import UserDetails from './UserDetails';
import FormInputLine from '../styles/FormInputLine';

function SearchForFriends({ searchUsers, setSearchUsers, friendsBabyShowers, setFriendsBabyShowers }) {

    const [search, setSearch] = useState("");
    // const [noUsersFound, setNoUsersFound] = useState(false);

    useEffect(() => {
        setSearchUsers([])
    },[])

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`search: ${search}`)
        fetch(`/users/search/${search}`)
        .then(resp => resp.json())
        .then((searchData) => setSearchUsers(searchData))
    }



    const userDetails = searchUsers.map((user) => {
        return (
            <UserDetails
                key={user.id}
                user={user}
                friendsBabyShowers={friendsBabyShowers}
                setFriendsBabyShowers={setFriendsBabyShowers}
            />
        )
    })

    console.log(`search term: ${search}`)
    // console.log(searchedUsers)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="Search-Form">
                    <FormInputLine bg={"bone"}>
                        <label className="Search">Search by Username</label>
                        <input 
                            id="search"
                            type="text"
                            name="search"
                            placeholder="Search..."
                            autoComplete="off"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            />
                    </FormInputLine>
                    <ButtonContainer>
                        <button className="Search-Button" type="submit">Search</button>
                    </ButtonContainer>
                </div>
            </form>
            { searchUsers.length > 0 ? (
            <div className="User-Tiles">
                {userDetails}
            </div>
            )  :  (
            <div className="Refine-Search">
                <p><i>No users match search terms. Please refine search.</i></p>
            </div>
        )}
        </>

    )
}

export default SearchForFriends;