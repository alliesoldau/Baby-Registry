import React from "react";

function Home( {user} ) {
    if (user) {
        return (
          <div className="Home-Page">
            <h1>🍼 Welcome, {user.username}! 🎁</h1>
          </div>
        )
      } else {
        return (
          <div className="Home-Page">
            <h1>Please Login or Sign Up</h1>
          </div>
        )
      }
}

export default Home;