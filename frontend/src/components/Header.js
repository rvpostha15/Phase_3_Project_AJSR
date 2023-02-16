import React from 'react';
import { Link, NavLink } from 'react-router-dom'


function Header({ setLoggedIn, currentUser })
{

    const handleLogout = () =>
    {
        setLoggedIn(false)
    }

    return (
        <div id='slide'>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/" className="title">StayOver</Link>
            <div className="flex_container">
                <NavLink to="/properties" className="navbar" >Properties</NavLink>
                <NavLink to="/favorites" className="navbar">Favorites</NavLink>
                <NavLink to={`/${currentUser.username}`} className="navbar" >My Account</NavLink>
                {/* might be a problem with the favorites loading all properties b4 it can get to favorites */}
            </div>
        </div>
    )
}

export default Header