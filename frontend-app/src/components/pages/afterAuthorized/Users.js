import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import firebase, { db } from "../../utils/fireApp";
import Message from "./Message";
import "./Chat.css";
import app from "../../utils/fireApp";
import FlipMove from "react-flip-move";

function Users() {
  // to keep track of type the user write in input
  const [input, setInput] = useState("");
  //to store the message in an array
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    //prevents the form to be refreshed while performing enter makes process faster
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      // timestamp: app.firestore.FieldValue.serverTimestamp(),
    });

    // //add the latest input in the array messages without deleting previous array
    // setMessages([...messages, input]);
    // clears the previous message in text area
    setInput("");
  };

  return (
    <section className="chat">
      <div className="listOfUsers">
        <h1> Contacts</h1>
        <div className="displayName">
          <div className="displayPic">
            <img
              src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
              alt=""
            />
          </div>
          <div style={{ margin: "0 10px" }}>
            <span style={{ fontWeight: 500 }}>Alisha Kunwar</span>
          </div>
        </div>
      </div>
      <div className="chatArea">
        <div className="chatHeader"> Alisha Kunwar </div>
        <div className="messageSections">
          <div style={{ textAlign: "left" }}>
            <p className="messageStyle">Hello User</p>
          </div>
        </div>
        <div className="chatC">
          {/* when the user type message, it updates the input */}

          <form className="chatControls">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              disabled={!input}
              variant="contained"
              color="secondary"
              type="submit"
              onClick={sendMessage}
            >
              Send
            </Button>
          </form>

          <Flipmove>
            {messages.map(({ id, message }) => (
              <Message username={username} message={message} />
            ))}
          </Flipmove>
        </div>
      </div>
    </section>
  );
}
export default Users;
