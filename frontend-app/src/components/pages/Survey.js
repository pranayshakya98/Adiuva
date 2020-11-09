import React from "react";
<<<<<<< HEAD
import "./Page.css";
import StarRating from "./StarRating";
import WelcomeNavbar from '../WelcomeNavbar'; 

function Survey() 
{
  return (
    <><WelcomeNavbar />
    <div className="contact-card">
      <div className="content-box">
        <div className="content">
        
          <h1> Survey</h1>
          <p>We value your feedback</p>
          <div className="content-mild"> 
               
            <form className=" form-cardbox">
                <StarRating /> 
                  <div className="message">
                    <div className="form-in">
                      <label htmlFor="message" className="form-label">
                        <input
                            id="message"
                            type="paragraph"
                            name="message"
                            className="form-in"
                            placeholder="Message"
                        />
                      </label>
                    </div>
                  </div>
              <button className="form-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div></>
  );
}
=======
import StarRating from "./StarRating";
import WelcomeNavbar from '../WelcomeNavbar';
import "./Page.css";
import app from '../utils/fireApp';

const Survey = ({ history }) => {
    
    // Check if the user is already logged in
    if (app.auth().currentUser && app.auth().currentUser.emailVerified) {
        // Redirecting the user already logged in
        history.push("/feed");
    };

    return (
        <><WelcomeNavbar />
        <div className="contact-card">
        <div className="content-box">
            <div className="content">
            <h1> Survey</h1>
            <p>We value your feedback</p>
            <div className="content-mild"> 
                <form className=" form-cardbox">
                <StarRating /> 
                    <div className="message">
                        <div className="form-in">
                            <label htmlFor="message" className="form-label">
                            <input
                                id="message"
                                type="paragraph"
                                name="message"
                                className="form-in"
                                placeholder="Message"
                            />
                            </label>
                        </div>
                    </div>
                <button className="form-btn" type="submit">
                    Submit
                </button>
                </form>
            </div>
            </div>
        </div>
    </div>
    </>
    );
  }
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd

export default Survey;
