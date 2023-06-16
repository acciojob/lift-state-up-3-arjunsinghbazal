import React from "react";

const Child=({value})=>{
return (
    <div className="child">
        <h1>Child Component</h1>
        <button onClick={()=>value("Option 1")}>Option 1</button>
    </div>
)
}

export default Child;