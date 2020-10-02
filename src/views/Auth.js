// React
import React from "react";

// Components
import AuthForm from "../components/AuthForm";

// Firebase
import { authService, fbInstance } from "../firebase";

function Auth() {
  const handleGoogleAuth = async () => {
    const provider = new fbInstance.auth.GoogleAuthProvider();

    await authService.signInWithPopup(provider);
  };

  return (
    <div className="auth">
      <AuthForm />

      <div className="auth__socialSignIn">
        <button onClick={handleGoogleAuth}>Continue with Google</button>
      </div>
    </div>
  );
}

export default Auth;
