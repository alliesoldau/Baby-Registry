import React from "react";

function Home( {user} ) {
    if (user) {
        return (
          <div className="Home-Page">
            <h1><i>🍼 Welcome, {user.username}! 🎁</i></h1>
          </div>
        )
      } else {
        return (
          <div className="Home-Page">
            <h1><i>Please Login or Sign Up</i></h1>
          </div>
        )
      }
}

export default Home;