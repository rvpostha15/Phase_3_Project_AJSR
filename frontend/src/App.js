import PropertyContainer from './PropertyContainer'
import React, { useState, useEffect } from 'react'
import Login from "./Login"

function App()
{
    const [properties, setProperties] = useState([])
    const [userData, setUserData] = useState([])

    useEffect(function ()
    {
        fetch("http://localhost:9292/properties")
            .then(function (resp)
            {
                return resp.json()
            })
            .then(function (data)
            {
                console.log(data)
                return setProperties(data)
            })
    }, [])

    useEffect(function ()
    {
        fetch("http://localhost:9292/users")
            .then(function (resp)
            {
                return resp.json()
            })
            .then(function (data)
            {
                console.log(data)
                return setUserData(data)
            })
    }, [])

    // const adminUser = {
    //     email: "admin@admin.com",
    //     password: "123admin"
    // }

    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("")

    function login(details)
    {
        // console.log(details)
        // if (details.email == adminUser.email && details.password == adminUser.password) {
        //     console.log("logged in")
        //     setUser({
        //         name: details.name,
        //         email: details.email
        //     })
        // } else {
        //     console.log("details do not match")
        // }

        const mappedUsers = userData.map(function (user)
        {
            if (user.email == details.email && user.password == details.password) {
                console.log("logged in")
                setLoggedIn(true)
                return setUser({
                    name: details.name,
                    email: details.email
                })
            } else {
                console.log("details do not match")
            }
        })
        // console.log(mappedUsers)
    }


    function logout()
    {
        console.log("Logout")
    }

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className='App'>
            {(loggedIn === true) ? (
                <PropertyContainer properties={properties} />
            ) : (
                <Login login={login} error={error} />
            )
            }
        </div>
    )
}

export default App;