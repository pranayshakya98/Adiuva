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
  const [userName, setuserName] = useState("");
  const [messages, setMessages] = useState([]);
  const userID = app.auth().currentUser.uid;
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    if (userId) {
      db.collection("users")
        .doc(userId)
        .onSnapshot((snapshot) =>
          setuserName(snapshot.data().fName + " " + snapshot.data().lName)
        );
    }
  }, [userId]);

  

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed ....", input);
  };

  return (
    <div className="chatpage">
      <div className="page">
        <div className="chatheader">
          <Avatar />
          <div className="header_info"> {userName}</div>

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
        <p className={`chat_message ${true && "chat_receiver"}`}> hi guys </p>
      </div>

      <div className="chatfooter">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            SEND{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
