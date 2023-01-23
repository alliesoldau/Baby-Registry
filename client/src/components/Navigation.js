import React from "react";
import {Link, NavLink} from 'react-router-dom'

function Navigation({ user, setUser }) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return(
        <div className="Navigation-Container">
            <header>
                <Link exact to="/">
                    <h1>
                        Baby Registry
                    </h1>
                </Link>
                <div>
                    {user ? (
                    <button onClick={handleLogoutClick}>Logout</button>
                    ) : (
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>
                    )}
                </div>
                <div className="Nav-Link-Container">
                    {/* TO DO: Figure out how to add in navlinks for the specific user once they've logged in */}
                    {/* <NavLink className="NavLink-Button" to="/users/:id/myregistry">
                        My Registry
                    </NavLink> */}
                </div>
            </header>
        </div>
    )
}

export default Navigation;