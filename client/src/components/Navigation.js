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
            <header className="Nav-Bar">
                <Link exact to="/">
                    <h1>
                        Baby Registry
                    </h1>
                </Link>
                <div className="Nav-Bar-All-Links-Container">
                    {user ? (
                        <div className="Nav-Bar-All-Links">
                            {/* <div className="Nav-Link-Container"> */}
                                <NavLink className="NavLink-Button" to={`/users/${user.id}/profile`}>
                                    User Profile
                                </NavLink>
                                <NavLink className="NavLink-Button" to={`/users/${user.id}/baby_showers`}>
                                    My Babyshower Registry
                                </NavLink>
                                <NavLink className="NavLink-Button" to={`/users/${user.id}/gifts`}>
                                    Things I'm Gifting
                                </NavLink>
                            {/* </div> */}
                            <button onClick={handleLogoutClick}>Logout</button>
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