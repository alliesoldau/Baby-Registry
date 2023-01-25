import React, { useState, useEffect } from 'react';
import Button from '../styles/Button'
import UserDetails from './UserDetails';

function SearchForFriends({ searchUsers, setSearchUsers }) {

    const [search, setSearch] = useState("");

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
            />
        )
    })

    console.log(`search term: ${search}`)
    // console.log(searchedUsers)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Search by Username</label>
                <input 
                    id="search"
                    type="text"
                    name="search"
                    placeholder="Search..."
                    autoComplete="off"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    />
                <Button>
                    <button type="Submit-Button">Search</button>
                </Button>
            </form>
            {userDetails}
        </>
    )
}

export default SearchForFriends;