// import {render} from "react-dom";
// import "./index.css";
// import App from "./App";
// import React from "react";
// import { createRoot } from "react-dom/client";

// render(
//   <React.StrictMode>
//     <div className="header" style={{ textAlign: "center" }}>
//       <a href="./">QUIZ APP</a>
//     </div>
//     <App />
//   </React.StrictMode>,

//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="header" style={{ textAlign: "center" }}>
     <a href="./">TRIVIA GAME</a>
   </div>
    <App />
  </React.StrictMode>
);

reportWebVitals();
