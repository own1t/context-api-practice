// React
import React from "react";

// Context API
import { useStateValue } from "../StateProvider";

// Firebase
import { authService } from "../firebase";

function Home() {
  const [{ user }, dispatch] = useStateValue();

  const handleSignOut = () => {
    if (user) {
      authService.signOut();
    }
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Home;
