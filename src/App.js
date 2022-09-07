import React, {useEffect,useState} from 'react';
import './App.css';
const API_URL ="http://api.icndb.com/jokes/random"

function App() {
const[joke,setJoke] =useState('');

const generateJoke=()=>{
  fetch(API_URL)
    .then(res=>res.json())
    .then(data=>setJoke(data.value.joke));
}
useEffect (()=>{
  generateJoke();
},[])
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

export default App;
