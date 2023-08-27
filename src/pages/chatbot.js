import React, { useState } from "react";
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import { ThemeProvider } from 'styled-components';




// // Connecting with AI Model
// function response(userInput){

//     // Accessing the Model through python file
//     const AIModelOutput = spawn('python',['my-app/APIExampleChatStream.py',userInput]);

//     // AI Model Output
//     AIModelOutput.stdout.on('data',(data) =>{
//       return data;
//       // console.log(data);
//     });

//     //Error Handling
//     AIModelOutput.stderr.on('data', (data) =>{
//       console.log(data);
//     });

//     //Lost Connection with server
//     AIModelOutput.on('data', (code) =>{
//       console.log(`Lost Connection, please try again later!!! ${code}`)
//     }); 

// }

// Axios API: TODO
// function response(){

// }



// React-ChatBot-UI
export default function ChatbotApp(){
  // const [myArray, setMyArray] = useState([]);
  var message_limit = 25; //user can only send max 25 messages
  var count = 1;
  var steps = new Array(2*message_limit+1);
  var messageArray = []


  steps[0] = {
    id:'Greet',
    message:'Hello, Welcome to our platform. How Can I help you?',
    trigger:String(count),
  }


  while(count<2*message_limit+1){
    var Message = 'Hi I understand your issue as ' + '{previousValue}' +'. Be patient, it will be resolved soon.';
    // var Message = response('{previousValue}');

    steps[count] = {
      id:String(count),
      user:true,
      trigger:String(count+1),
    };

    steps[count+1] = {
      id:String(count+1),
      message: Message,
      trigger:String(count+2),
    };

    
    count +=2;

    if(count===2*message_limit+1){
      steps[count] = {
        id:String(count),
        message:'Thank You for chatting with us. Your conversation has ended.',
        end:true
      };
    };
  
  }

  // localStorage.setItem("steps", JSON.stringify(steps));
  // console.log(steps);
  // console.log(messageArray);
  // var storedUserNames = JSON.parse(localStorage.getItem("database"));
  // console.log(storedUserNames);
  
  

// All possible custom themes 
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#e35869',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#e35869',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };


// all available config props
  const config ={
    width: "400px",
    height: "500px",
    floating: true,
  };

  return ( 
  <>
    <Segment >
      <ThemeProvider theme={theme}>
        <ChatBot 
        headerTitle="Speech Recognition"
        recognitionEnable={true}
        headerTitle="Speech Synthesis"
        speechSynthesis={{ enable: true, lang: 'en' }}
        steps={steps}
        {...config}
        />
      </ThemeProvider>
    </Segment>
  </>
);
}