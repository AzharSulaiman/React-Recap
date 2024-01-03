import { useState } from "react";
import { Link } from 'react-router-dom'

const Header = () => { 
    const [btnName, setBtnName] = useState('LogIn');
    
 return (    
    <div className="headerCont">
        <div className="logoContainer">
            <img className="logo" src="https://masterbundles.com/wp-content/uploads/2023/05/untitled-1-converted-220.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
                <li>
                    <Link to='contact'>Contact</Link>
                </li>
                <li>Cart</li>
                <button onClick={()=> {
                    btnName === 'LogIn' ? setBtnName('LogOut') : setBtnName('LogIn')
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
)};

export default Header;