import React, { useState } from "react";
import './login.css'

function Login({ login, error })
{

    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    function handleNameChange(evt)
    {
        console.log(evt.target.value)
        setDetails({ ...details, name: evt.target.value })
    }
    function handleEmailChange(evt)
    {
        console.log(evt.target.value)
        setDetails({ ...details, email: evt.target.value })
    }
    function handlePasswordChange(evt)
    {
        console.log(evt.target.value)
        setDetails({ ...details, password: evt.target.value })
    }

    function handleSubmit(evt)
    {
        evt.preventDefault()
        login(details)
    }
    return (
        <div className="cover">
            <h2>Login</h2>
            <div className="form-group">
                <form onSubmit={handleSubmit} >
                    <input className="login-item" type="email" placeholder="email" onChange={handleEmailChange} value={details.email} />
                    <input className="login-item" type="password" placeholder="password" onChange={handlePasswordChange} value={details.password} />
                    <input className="login-btn" type="submit" value="login" />
                </form>
            </div>


        </div>
    )
}

export default Login