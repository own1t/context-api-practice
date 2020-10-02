// React
import React from "react";

// Context API
import { useStateValue } from "../StateProvider";

function Profile() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="profile">
      <h1>{user.email}'s Profile</h1>
    </div>
  );
}

export default Profile;
