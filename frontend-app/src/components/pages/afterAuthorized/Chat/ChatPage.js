import React, { useState, useEffect } from "react";
import "./ChatPage.css";
import { Avatar, IconButton } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhoneIcon from "@material-ui/icons/Phone";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import ScheduleIcon from '@material-ui/icons/Schedule';
// import Calender from "../Calender";
import app, { db } from "../../../utils/fireApp";
import firebase from "firebase";

function ChatPage() {
  // to keep track of input the user type
  const [input, setInput] = useState("");
  const { userId } = useParams();
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (userId) {
      db.collection("messages")
      .doc(userId)
      db.collection("users")
        .doc(userId)
        .onSnapshot((snapshot) => setUserName(snapshot.data().fName));

      db.collection("messages")
        .doc(userId)
        .collection("users")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [userId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").doc(userId).add({
      message: input,
      // userId: 
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chatpage">
    <div className = "page">

      <div className="chatheader">
        <Avatar />
        <div className="header_info">
            {userName}
        </div>

        <div className="headerright">
          <IconButton>
            <AttachmentIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>

          <IconButton>
            <ScheduleIcon  />
          </IconButton>
          </div>
        </div>
      </div>

      <div className="chatbody">
        {messages.map((message) => (
          <p className={`chat_message ${true && "chat_receiver"}`}>
            <span className="chatname">{message.name}</span>
            {message.message}
            <span className="chattime">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
        <p> her </p>
      </div>

      <div className="chatfooter">
        
          <InsertEmoticonIcon />
          <form>
              <input type ="text"/>
              <button>SEnd </button>          
        </form>
         
      </div>
    </div>
  );
}

export default ChatPage;