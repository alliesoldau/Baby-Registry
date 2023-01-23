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
                                <NavLink className="NavLink-Button" to={`/users/${user.id}/profile`}>
                                    User Profile
                                </NavLink>
                                <NavLink className="NavLink-Button" to={`/users/${user.id}/baby_showers`}>
                                    My Babyshower Registry
                                </NavLink>
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