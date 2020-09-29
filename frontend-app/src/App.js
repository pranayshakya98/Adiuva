import React from "react";
import WelcomeNavbar from "./components/WelcomeNavbar";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Survey from "./components/pages/Survey";

function App() {
  return (
    <>
      <Router>
        <WelcomeNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactus" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
<<<<<<< HEAD
          <Route path="/survey" component={Survey} />
          {/* <Route path="/signin" component={Sign} /> */}
=======
          
>>>>>>> 3c60483534992a8634adad75e25fc43010c45887
        </Switch>
      </Router>
    </>
  );
}

export default App;
