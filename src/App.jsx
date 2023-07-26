import { useState } from 'react';
import reactLogo from './assets/react.svg';
import catLogo from './assets/cat.svg';
import './App.css';
import Welcome from "./components/Welcome.jsx";
import Navbar from "./components/Navbar";
import Getajoke from "./components/Getajoke";
import ChatBox from "./components/ChatBox";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";




function App() {
  const [user] = useAuthState(auth);
  

  return (
    
	 <div className="App">
	
	<Navbar />
	
	{!user ?<> {<Welcome />} {<Getajoke />}</> : <ChatBox />}
	
	 
	 
	 </div>
	 

   
  );
};

export default App;
