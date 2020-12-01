// importing all the required packages and components
import React, { useCallback, useState } from "react";
import Navbar from "../../MainNavbar";
import "../Page.css";
import firebase from 'firebase';
import app, { db } from '../../utils/fireApp';

const DeleteUser = ({ history }) => {
    const userid = app.auth().currentUser.uid;
    const [error, setError] = useState("");
    // action handler when user provide email and password to delete account
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            // getting email and password from html input field
            const {
                email,
                password,
            } = event.target.elements;
            // getting current user to be deleted
            var user = firebase.auth().currentUser;

            if (email.value.trim() === '') {
                setError("Email cannot be blank");
            }
            else if (password.value.trim() === '') {
                setError("Password cannot be blank");
            }
            else{
                var credential =firebase.auth.EmailAuthProvider.credential(
                    email.value, 
                    password.value
                );
                try {
                    //validating the credential and carrying the deletion of the user
                    user.reauthenticateWithCredential(credential).then(function() {
                        user.delete()
                        .then(function() {})
                        .catch(function(err) {
                            setError(err.message);
                        });
                    }).catch(function(err) {
                        setError(err.message);
                    });
                    if (error == ""){
                        db.collection("users").doc(userid).delete()
                        .then(() => {})
                        .catch(function(err) {
                            setError(err.message);
                        });
                        var postRef = db.collection("dPosts").where("userID", "==", userid);
                        if (error == "" && postRef){
                            postRef.get().then((doc) => {
                                doc.forEach((data) => {
                                    data.ref.delete().then(() => {
                                        history.push("/pagedeleted");
                                    });
                                });
                            });
                        }
                        else if (error !== ""){
                            history.push("/pagedeleted");
                        }
                    }
                } 
                catch (err) {
                    setError(err.message);
                }
            }
            

            
        }
    );


  return (
    <><Navbar />
    <div className="contact-card">
        <div className="content-delete">
            <div className="content">
            <h2>Enter your Email and Password to DELETE your Account</h2>
            <div className="content-mild">
                <form onSubmit={onSubmitHandler} className=" form-DA">
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
                <label htmlFor="password" className="form-label">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-inp"
                            placeholder="Password"
                        />
                        </label>
                
                <h4 style={{color: "red"}}> {error} </h4>
                <button className="btn-delete" type="submit">
                    DELETE ACCOUNT
                </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        </>
  );
}

export default DeleteUser;