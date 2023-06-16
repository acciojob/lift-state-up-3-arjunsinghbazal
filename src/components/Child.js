import React from "react";

const Child=({value})=>{
return (
    <div className="child">
        <h1>Child Component</h1>
        <button onClick={()=>value("option1")}>Option1</button>
    </div>
)
}

export default Child;