import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  // React States
  const navigate = useNavigate({});
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Loading the database from the local storage
  var storedUserNames = JSON.parse(localStorage.getItem("database"));
  console.log(storedUserNames);

  // Default Login info
  var database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  // Using stored Username as database
  if (storedUserNames){
    if (storedUserNames.length>2){
      database = storedUserNames;
    }
  }
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    // create a text file if not present
    
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);

      }
    } else {
      // Creating variable for new Username 
      const newuser = {
        username:uname.value,
        password:pass.value
      }
      database.push(newuser);

      console.log(database);

      // Adding new username credentials to the database
      localStorage.setItem("database", JSON.stringify(database));
      setIsSubmitted(true);
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? navigate("/Chatbot") : renderForm}
      </div>
      
    </div>
  );
}
