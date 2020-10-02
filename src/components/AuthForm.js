// React
import React, { useState } from "react";

// React Router Dom
import { useHistory } from "react-router-dom";

// Firebase
import { authService } from "../firebase";

function AuthForm() {
  const [newAccount, setNewAccount] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data;

    if (newAccount) {
      data = await authService
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push("/");
        })
        .catch((error) => setError(error.message));
    } else {
      data = await authService
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => setError(error.message));
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        {newAccount ? (
          <button type="submit">Sign Up</button>
        ) : (
          <button type="submit">Sign In</button>
        )}

        {error && <span className="authForm__error">{error}</span>}
      </form>

      <span className="authForm__switch" onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Sign Up"}
      </span>
    </div>
  );
}

export default AuthForm;
