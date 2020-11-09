import React, { useState, useEffect, useContext } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChat from "./SidebarChat";
import app, { db } from "../../../utils/fireApp";

function Sidebar() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const userID = app.auth().currentUser.uid;

  // useEffect(() => {
  // db.collection("users").doc(userID).get()
  // .then((doc) => {
  // const userName = doc.data().fName + ' ' + doc.data().lName;
  // }}))                                    

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,

          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="header">
        
        <Avatar />
        
        

        <div className="headerRight">
        
         </div>
      </div>

      <div className="search">
        <div className="search-box">
          <SearchOutlined />
          <input placeholder="Search Contact" type="text" />
        </div>
      </div>

      <div className="sidecontact">
        {users.map((user) => (
          <SidebarChat
            id={user.id}
            fName={user.data.fName}
            lName={user.data.lName}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
