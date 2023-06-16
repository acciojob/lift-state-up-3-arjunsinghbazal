
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
import Child1 from "./Child1";
const App = () => {
  const [Value,setValue]=useState("");
  return (
    <div className="parent">
       <h1>Parent Component</h1>
       <Child value={setValue}/>
       <Child1 value={setValue}/>
       <p>Selected Option: {Value}</p>
    </div>
  )
}

export default App
