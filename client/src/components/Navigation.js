import React from "react";
import {Link, NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'


function Navigation({ user, setUser }) {

    const history = useHistory()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {

            history.push("/")
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
                                <NavLink className="NavLink-Button" to="/users/:id/profile">
                                    User profile
                                </NavLink>
                                <NavLink className="NavLink-Button" to="/users/:id/registry">
                                    My Babyshower Registry
                                </NavLink>
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