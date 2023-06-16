import React from "react";

const Child1=({value})=>{
return (
    <div className="child">
        <h1>Child Component</h1>
        <button onClick={()=>value("Option 2")}>Option 2</button>
    </div>
)
}

export default Child1;