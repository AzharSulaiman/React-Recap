import { useState } from "react";

const Header = () => { 
    const [btnName, setBtnName] = useState('LogIn');
    
 return (    
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
                <button onClick={()=> {
                    btnName === 'LogIn' ? setBtnName('LogOut') : setBtnName('LogIn')
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
)};

export default Header;