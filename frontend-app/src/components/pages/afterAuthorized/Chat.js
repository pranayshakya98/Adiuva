import React from "react";
import Users from "./Users";
import Navbar from "../../MainNavbar";
import "./Chat.css";

function Chat() {
  return (
    <>
      <div className="chatpage">
        <Navbar />

        <Users />
      </div>
    </>
  );
}

export default Chat;
