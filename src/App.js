import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading = React.createElement('h1', {}, 'Hello World from React!');
const jsxHeading = <h1>Recap React 🚀</h1> 

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayOut = () => {
  return (
     <div className="app">
       <Header/>
       <Body/>
    </div>
)}
root.render(<AppLayOut/>);