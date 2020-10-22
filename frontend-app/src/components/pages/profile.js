import React from "react";
import "./Page.css";
import WelcomeNavbar from '../WelcomeNavbar'
import StarR from "./StarR";

const profile = ()=>{
  return (
  <><WelcomeNavbar />

 
    <div className="contact-card">
      <div style={{
        display: "flex",
        justifyContent:"space-around",
        margin:"19px 0px"
      }}>

        <div>
          <img style={{width:"250px",height:"200px",borderRadius:"80px"}}
          src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          />
        </div>
        <div className="content">
        <form className="form-cardbox">
          <label>Name:</label><h3>Pranay Shakya</h3>
          <div className="content">
          <label className="field">E-mail:</label><h3>pranayshakya98@gmail.com</h3>
          <label>Verification:</label><StarR />
          <label>Zipcode:</label><h3>76013</h3>
          <button className="form-btnna" type="submit">
                Edit Profile
              </button>
          </div>
          
        </form>
        </div>
      </div>
    </div></>
  )
}

export default profile;
