import React from "react";
import googleLogo from "../assets/google.svg";
import callLogo from "../assets/video-calling.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const Welcome =()=>{
	const[user]=useAuthState(auth);
	const googleSignIn=()=>{
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};
	
	
	
	return (
	<main className="welcome">
	<h2>Welcome to react chat</h2>
	<img src ={callLogo} alt="man chatting on phone" width={120} height={100}/>
	<p>sign in with your google account</p>
	<button className="sign-in">
	<img
	 onClick ={googleSignIn}
	 src = {googleLogo}
	 alt ="signIn with google"
	 type ="button"
	 />
	 </button>
	 </main>
	);
};
export default Welcome;