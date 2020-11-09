// Import all the required packages
import React, { useCallback } from "react";
import WelcomeNavbar from '../WelcomeNavbar';
import app from '../utils/fireApp';
import "./Page.css";
import { Link } from "react-router-dom";

<<<<<<< HEAD
=======
// Function to process login backend and frontend
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd
const Login = ({ history }) => {
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };

    // Callback function to log in the user using email and password provided
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            // Using firebase auth to login and catching error at same time 
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                    .then((data) => {
                        if (app.auth().currentUser.emailVerified){
                            history.push("/feed");
                        }
                        else {
                            alert("Your email is not verified. Please verify your email first.");
                        }
                    });
            } catch (err) {
                alert(err);
            }
        },
        [history]
    );

        return (
            <><WelcomeNavbar />
            <div className="contact-card">
            <div className="content-box">
                <div className="content">
                <h1> Please Log In </h1>
                <div className="content-mild">
                    <form onSubmit={onSubmitHandler} className=" form-cardbox">
                    <div className="form-input">
                        <label htmlFor="username" className="form-label">
                        <input
                            id="email"
                            type="text"
                            name="email"
                            className="form-input"
                            placeholder="Email"
                        />
                        </label>
                    </div>
                    
                    <div className="form-inp">
                        <label htmlFor="password" className="form-label">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-inp"
                            placeholder="Password"
                        />
                        </label>
                    </div>

                    <div className="forgot-link">
                        
                        <h4>
                            <Link to="/forgotpassword"><b><p className="forgot-link1">Forgot your password?</p></b></Link>
                        </h4>
                        <br></br>
                        <h3>
                            <Link to="/signup"><b><p className="forgot-link1">Create a new account</p></b></Link>
                        </h3> 
                    </div>

                    <button className="form-btn" type="submit">
                        Login
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            </>
        );
    };

export default Login;
