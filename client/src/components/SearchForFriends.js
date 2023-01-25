import React, { useState } from 'react';
import Button from '../styles/Button'

function SearchForFriends({ allUsers }) {

    const [search, setSearch] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`search: ${search}`)
        fetch(`/users/search/${search}`)
        .then(resp => resp.json())
        .then((searchData) => console.log(searchData))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Search for friends</label>
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