//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter";

let seconds = 0;
setInterval(()=>{
    ReactDOM.render(<SecondsCounter seconds={seconds}/>, document.querySelector("#app"));
    seconds++;

},1000)



//render your react application

