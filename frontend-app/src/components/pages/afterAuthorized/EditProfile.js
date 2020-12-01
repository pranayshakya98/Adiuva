import React, { useCallback, useState } from "react";
import Navbar from "../../MainNavbar";
import "./EditProfile.css";
import app, { db } from '../../utils/fireApp';


// function to edit profile detail
function EditProfile({ history }) {

    if (!(app.auth().currentUser)) {
        // Redirecting the user to log-in if logged out
        history.push("/login");
    };
    const userID = app.auth().currentUser.uid;
    const [error, setError] = useState("");

     // On click of submit buttom, the callback function if used to validate the input and signup
     const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            // form data sheme
            const {
                city,
                stateName,
                about,
                zipcode
            } = event.target.elements;
            // Validating all the use inputs and storeing respective error
                try {
                    const newUser = {
                        city: city.value.trim(),
                        stateName: stateName.value.trim(),
                        zipcode: zipcode.value.trim(),
                        about: about.value.trim()
                    };
                    console.log(newUser.city);
                    // Pushing the change to database
                    if (newUser.city != ""){
                        db.doc(`/users/${userID}`).update(
                            {
                            city: newUser.city
                        })
                        .catch((err) => {
                            setError(err.message);
                        });
                    }
                    if (newUser.stateName != ""){
                        db.doc(`/users/${userID}`).update(
                            {
                            stateName: newUser.stateName
                        })
                        .catch((err) => {
                            setError(err.message);
                        });
                    }
                    if (newUser.zipcode != ""){
                        db.doc(`/users/${userID}`).update(
                            {
                            zipcode: newUser.zipcode
                        })
                        .catch((err) => {
                            setError(err.message);
                        });
                    }
                    if (newUser.about != ""){
                        db.doc(`/users/${userID}`).update(
                            {
                            about: newUser.about
                        })
                        .catch((err) => {
                            setError(err.message);
                        });
                    }
                } catch (err) {
                    setError(err.message);
                };
                history.push("/profile");
            });
return(
<><Navbar />
      <div className="content-editprofile">
        <div className="content">
          <h1> Please Re-enter your details</h1>
            <form className=" form-cardbox" onSubmit={onSubmitHandler}>

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

              <div className="form-fill">
                <label htmlFor="stateName" className="form-label">
                  <input
                    id="stateName"
                    type="text"
                    name="stateName"
                    className="form-fill"
                    placeholder="State"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="about" className="form-label">
                  <textarea
                    id="about"
                    name="about"
                    className="form-fill"
                    placeholder="About Yourself"
                  />
                </label>
              </div>

              <div className="form-fill">
                <label htmlFor="zipcode" className="form-label">
                  <input
                    id="zipcode"
                    type="number"
                    name="zipcode"
                    className="form-fill"
                    placeholder="Zipcode"
                  />
                </label>
              </div>
              <h4 style={{color: "red"}}> {error} </h4>
              <button className="form-btnn" type="submit">
                Submit Details
              </button>
            </form>
          </div>
        </div>
    </>
)
        };

export default EditProfile;