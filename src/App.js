import React from "react";
import  ChatbotApp  from "./pages/chatbot.js"
import Login  from "./pages/login.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div className="App">
  <Router>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/Chatbot" element={<ChatbotApp/>}/>
    </Routes>
  </Router>
  </div> 

)}

export default App;