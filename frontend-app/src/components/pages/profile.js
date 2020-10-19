import React from "react";
import "./Page.css";

function profile() {
  return (
    <div className="contact-card"> 
      <div className="content-box">
        <div className="content">
          <h1> PROFILE</h1>              
          <div className="content-mild">
            <form className=" form-cardbox">
              <div className="form-fill1">
                <h4>First Name</h4>           
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
              
               
              
              
              
              
           
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
