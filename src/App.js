// React
import React, { useEffect } from "react";

// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Home from "./views/Home";
import Auth from "./views/Auth";
import Profile from "./views/Profile";

// Components
import Header from "./components/Header";

// Context API
import { useStateValue } from "./StateProvider";

// Firebase
import { authService } from "./firebase";

// CSS
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    authService.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          {!user ? (
            <>
              <Route path="/" exact component={Auth} />
            </>
          ) : (
            <>
              <Route path="/" exact component={Home} />
              <Route path="/profile" exact component={Profile} />
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
