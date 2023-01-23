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
                        <div>
                            <button onClick={handleLogoutClick}>Logout</button>
                            <div className="Nav-Link-Container">
                                {/* TO DO: Figure out how to add in navlinks for the specific user once they've logged in */}
                                {/* <NavLink className="NavLink-Button" to="/users/:id/myregistry">
                                    My Registry
                                </NavLink> */}
                                {/* TO DO: Add in profile details, item details, etc */}
                            </div>
                        </div>                    
                    ) : (
                    <div className="Login-Signup-Container">
                        <Link to="/users/new">Sign Up</Link>
                        <Link to="/login">Login</Link>
                    </div>
                    )}
                </div>

            </header>
        </div>
    )
}

export default Navigation;