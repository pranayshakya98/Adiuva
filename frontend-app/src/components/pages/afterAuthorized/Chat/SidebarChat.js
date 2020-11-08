import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import app, { db } from "../../../utils/fireApp";
import { AuthProvider, AuthContext } from "../../../utils/fireAuth";


function SidebarChat({ id, fName, lName }) {

  const [seed, setSeed] = useState("");
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  useEffect(() => {
    app.auth().onAuthStateChanged((Cuser) => {
        setCurrentUser(Cuser)
        
    });
}, []);

  return (
   
    
    
    
    <Link to = {`/chat/users/${id}`}>
    <div className="sidebarchat">
      <Avatar src={`https://avatars.dicebear.com/api/${seed}.svg`} />
      <div className="chatinfo">
        <h2>
          {fName} {lName}
        </h2>
      </div>
    </div>
    </Link>
    
    
  );
}

export default SidebarChat;