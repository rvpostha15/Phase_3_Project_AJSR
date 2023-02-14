import React from 'react';
import { Link, NavLink } from 'react-router-dom' 


function Header ({ }) {

    const handleLogin = () => {
        alert("You've gotta program me!")
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login / Logout</button>
            <Link to = "/" className="title">StayOver</Link>
            <div className="flex_container">  
                <NavLink to = "/properties" className="navbar" >Properties</NavLink>
                <NavLink to = "/:user" className="navbar" >My Account</NavLink>
                <NavLink to = "/properties/favorites" className="navbar">Favorites</NavLink>
            </div>
        </div>
    )
}

export default Header