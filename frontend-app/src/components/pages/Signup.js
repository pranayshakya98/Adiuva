import React from "react";
import "./Page.css";

//function for creating the signup page
function Signup() {
  return (
    //creating the interface for the page.
    <div className="contact-card"> 
      <div className="content-box">
        <div className="content">
          <h1> Please Sign Up </h1>              
          <div className="content-mild">
            //creating the form in order to fill the information for the sign up page
            <form className=" form-cardbox">
              <div className="form-fill1">
              //set the criterias for the username
                <label htmlFor="username" className="form-label">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-fill"
                    placeholder="Username*"
                  />
                </label>
              </div>
              //set the criterias for the fullname
              <div className="form-fill">
                <label htmlFor="fullname" className="form-label">
                  <input
                    id="fullname"
                    type="text"
                    name="fullname"
                    className="form-fill"
                    placeholder="Full name*"
                  />
                </label>
              </div>
              //set the criterias for the email
              <div className="form-fill">
                <label htmlFor="email" className="form-label">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-fill"
                    placeholder="Email*"
                  />
                </label>
              </div>
              //set the criterias for the city
              <div className="form-fill">
                <label htmlFor="city" className="form-label">
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className="form-fill"
                    placeholder="City"
                  />
                </label>
              </div>

              //set the criterias for the state
              <div className="form-fill">
                <label htmlFor="state" className="form-label">
                  <input
                    id="state"
                    type="text"
                    name="state"
                    className="form-fill"
                    placeholder="State*"
                  />
                </label>
              </div>
              //set the criterias for the zipcode
              <div className="form-fill">
                <label htmlFor="zipcode" className="form-label">
                  <input
                    id="zipcode"
                    type="text"
                    name="zipcode"
                    className="form-fill"
                    placeholder="Zipcode*"
                  />
                </label>
              </div>
              //set the criterias for the country
              <div className="form-fill">
                <label htmlFor="country" className="form-label">
                  <input
                    id="country"
                    type="text"
                    name="country"
                    className="form-fill"
                    placeholder="Country*"
                  />
                </label>
              </div>
              //set the criterias for the password
              <div className="form-fill">
                <label htmlFor="password" className="form-label">
                  <input
                    id="password"
                    type="text"
                    name="password"
                    className="form-fill"
                    placeholder="Password*"
                  />
                </label>
              </div>
              //set the criterias for the second password
              <div className="form-fill">
                <label htmlFor="password2" className="form-label">
                  <input
                    id="password2"
                    type="text"
                    name="password2"
                    className="form-fill"
                    placeholder="Confirm Password*"
                  />
                </label>
              </div>
              //create a button to submit the information.
              <button className="form-btnn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
