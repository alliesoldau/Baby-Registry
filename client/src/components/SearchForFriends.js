import React, { useState } from 'react';
import Button from '../styles/Button'

function SearchForFriends({ allUsers }) {

    const [search, setSearch] = useState("");
    const [searchedUsers, setSearachedUsers] = useState({allUsers});

    // TO DO: should I have it filter out the current user from the results?

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`search: ${search}`)
        fetch(`/users/search/${search}`)
        .then(resp => resp.json())
        .then((searchData) => setSearachedUsers(searchData))
    }

    console.log(searchedUsers)

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
        </>
    )
}

export default SearchForFriends;