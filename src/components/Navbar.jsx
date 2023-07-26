import React,{useState} from 'react'
import googleLogo from '../assets/google.svg'
import catLogo from '../assets/man.svg'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Getajoke from "./Getajoke";
const Navbar=()=>{
	const[user]=useAuthState(auth);
	const googleSignIn=()=>{
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};
	const signOut=()=>{
		auth.signOut();
	};
	const [isrender,setIsrender]=useState(false);
	return (
	
	<div className="nav-bar">
	<button className="joke-button1" margin= {0}><img
	src={!user?catLogo:user.photoURL}
	alt="charlie chaplin cartoon"
	height = {70}
	width ={70}

	/></button>
	{console.log(user)};
	<h1>React Chat App</h1><div className="user-name"><h2>{user?user.displayName:""}</h2></div>
	{user?(
	<button onClick={signOut} className="sign-out" type ="button">sign Out</button>):(
	<button className="sign-in">
	<img 
	onClick={googleSignIn}
	src={googleLogo}
	alt="sign In with google"
	type ="button"
	/>
	</button>
	)}
	
	</div>
	
	);
};
export default Navbar;