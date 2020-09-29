import React from "react";
import "./Page.css";

function Survey() {
  return (
    <div className="contact-card">
      <div className="content-box">
        <div className="content">
          <h1> Survey</h1>
          <p>We value your feedback</p>
          <div className="content-mild">
            <form className=" form-cardbox">
                <div className="message">
                    <div className="form-in">
                        <label htmlFor="message" className="form-label">
                        <input
                            id="message"
                            type="text"
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
  );
}

export default Survey;
