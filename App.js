import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement('h1', {}, 'Hello World from React!');
const jsxHeading = <h1>Recap React 🚀</h1> 

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => (
    <div className="headerCont">
        <div className="logoContainer">
            <img className="logo" src="https://masterbundles.com/wp-content/uploads/2023/05/untitled-1-converted-220.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const AppLayOut = () => (
     <div>
       <Header/>
    </div>
)
root.render(<AppLayOut/>);