import React from "react";
import {Link, NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import ButtonContainer from '../styles/ButtonContainer';

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
                    <h1 className="Baby-Registry-Header">
                        Baby Registry
                    </h1>
                </Link>
                <div className="Nav-Bar-All-Links-Container">
                    {user ? (
                        <div className="Nav-Bar-All-Links">
                                <NavLink className="NavLink-Button" to={`/users/${user.id}/profile`}>
                                    Profile
                                </NavLink>
                                <NavLink className="NavLink-Button" to={`/users/${user.id}/baby_showers`}>
                                    My Showers
                                </NavLink>
                                <NavLink className="NavLink-Button" to={`/users/${user.id}/gifts`}>
                                    Things I'm Gifting
                                </NavLink>
                                <NavLink className="NavLink-Button" to={`/users/search`}>
                                    Search for Friends
                                </NavLink>
                            <ButtonContainer>
                                <button className="Logout-Button" onClick={handleLogoutClick}>Logout</button>
                            </ButtonContainer>
                        </div>                    
                    ) : (
                    <div className="Nav-Bar-All-Links">
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