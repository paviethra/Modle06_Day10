import React, {useEffect,useState} from 'react';
import './App.css';
// const API_URL ="https://icanhazdadjoke.com/"
// "http://api.icndb.com/jokes/"

function App() {
const[joke,setJoke] =useState('');

const generateJoke=()=>{
  fetch("https://sv443.net/jokeapi/v2/joke/Programming")
    .then(res=>res.json())
    .then(data=>setJoke(data.joke));
}

useEffect (()=>{
  generateJoke();
});


  return (
    <>
    <div className="container">
      <h1>Joke Generator....</h1>
      <p dangerouslySetInnerHTML={{__html:joke}}/>
      
      <button onClick={generateJoke}>Another one 😂</button>
    </div>
    </>
  );
}

// <div>{Joke === "" ? <Button callApi={fetchApi} /> : 

export default App;
