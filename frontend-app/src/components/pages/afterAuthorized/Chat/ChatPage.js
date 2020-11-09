import React, { useState, useEffect } from "react";
import "./ChatPage.css";
import { Avatar, IconButton, Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Time from "./Choose";
import app, { db } from "../../../utils/fireApp";
import firebase from "firebase";
import Popup from "./Popup";

function ChatPage() {
  // to keep track of input the user type
  const [input, setInput] = useState("");
  const { userId } = useParams();
  const [userName, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (userId) {
      db.collection("users")
        .doc(userId)
        .onSnapshot((snapshot) => setName(snapshot.data().fName));
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

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="chatpage">
      <div className="page">
        <div className="chatheader">
          <Avatar />
          <div className="header_info">
            {" "}
             {userId}
          </div>

          <div className="headerright">
            <IconButton>
              <AttachmentIcon />
            </IconButton>

            <IconButton>
              <PhoneIcon />
            </IconButton>

            <div className="search">
              <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <Time />
              </Popup>

              <ScheduleIcon onClick={() => setOpenPopup(true)}> </ScheduleIcon>
            </div>
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
          <input type="text" />
          <button>SEND </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
