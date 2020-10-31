import React from "react";
import Sidebar from "./Sidebar";
import ChatPage from "./ChatPage";
import MainNavbar from "../../../MainNavbar";
import "./Chat.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import app, {db} from '../../../utils/fireApp';

function Chat() {
  return (
    <>
    
    <div className = "chat">
    <MainNavbar/>


    <div className = "chatcard">
    <div className ="chatbox">
    <Sidebar/>
    <ChatPage/>
    
    </div>
    </div>
    </div> 
    
    </>
  );
}

export default Chat;
