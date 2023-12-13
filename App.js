import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement('h1', {}, 'Hello World from React!');
const jsxHeading = <h1>Recap React 🚀</h1> 

const root = ReactDOM.createRoot(document.getElementById('root'));

const Defination = () => (<h2>Component Composition where there is component in another component.</h2>);

const HeadingComponent = () => (
     <div>
        <h1>Recap React 🚀</h1>
        <Defination/>
    </div>
)
root.render(<HeadingComponent/>);