<<<<<<< HEAD


=======
// importing all required functions and packages.
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import TermsOfServices from "./components/pages/TermsOfServices";
import Privacy from "./components/pages/Privacy";
import Home from "./components/pages/Home";
import Survey from "./components/pages/Survey";
import Signup from "./components/pages/Signup";
import profile from "./components/pages/profile";
import ForgotPass from "./components/pages/ForgotPass";
import Feed from "./components/pages/afterAuthorized/Feed";
import Profile from "./components/pages/afterAuthorized/Profile";
import Appointment from "./components/pages/afterAuthorized/Appointment";
import Chat from "./components/pages/afterAuthorized/Chat/Chat";
import CreatePost from "./components/pages/afterAuthorized/CreatePost";

<<<<<<< HEAD

=======
// Using router and switch to route the pages from one to another
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd
function App() {
  return (
    <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={Home} />
          <Route path="/contactus" component={Contact} />
          <Route path="/profilepage" component={profile} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPass} />
          <Route path="/survey" component={Survey} />
          <Route path="/signup" component={Signup} />
          <Route path="/survey" component={Survey} />
          <Route path="/feed" component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/chat" component={Chat} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/appointment" component={Appointment} />
=======
            <Route exact path="/" component={Home} />
            <Route path="/contactus" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/forgotpassword" component={ForgotPass} />
            <Route path="/survey" component={Survey} />
            <Route path="/signup" component={Signup} />
            <Route path="/termsofservices" component={TermsOfServices} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/feed" component={Feed} />
            <Route path="/profile" component={Profile} />
            <Route path="/chat" component={Chat} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/appointment" component={Appointment} />
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
