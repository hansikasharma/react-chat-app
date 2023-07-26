import React,{useState} from "react"
import joker from "../assets/man.svg"
const Getajoke = ()=>{
	const[joke, setJoke]=useState([]);
	 const jokeRes = async () => {
    const response = await fetch('https://icanhazdadjoke.com/',{
		headers:{
			'Accept':'application/json'
		}
	});
    const data = await response.json();

    setJoke(data);
  };

	return(
	<div className="joke-box">
	<h2>Click To Read a Joke</h2>
	<button className="joke-button">
	<img 
	src = {joker}
	alt = "Joke Button"
	height = {120}
	onClick = {jokeRes}
	width = {120}/>
	</button>
	
	<div className = "joke-body">{joke?joke.joke:""}</div>
	</div>
	);
};
export default Getajoke;