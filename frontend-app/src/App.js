import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import WelcomeNavbar from "./components/WelcomeNavbar";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import ForgotPass from "./components/pages/ForgotPass";
import Feed from "./components/pages/afterAuthorized/Feed";
import Profile from "./components/pages/afterAuthorized/Profile";
import Chat from "./components/pages/afterAuthorized/Chat";
import CreatePost from "./components/pages/afterAuthorized/CreatePost";

function App() {
  return (
    <>
      <Router>
        <WelcomeNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactus" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPass} />
          <Route path="/signup" component={Signup} />
          <Route path="/feed" component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/chat" component={Chat} />
          <Route path="/createpost" component={CreatePost} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
