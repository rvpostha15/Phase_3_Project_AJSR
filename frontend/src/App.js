
import Login from "./Login"

import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';

import PropertyContainer from './components/PropertyContainer';
import Header from './components/Header'
import CurrentProperty from './components/CurrentProperty'

function App() {

    let initialProperty = {
        street_address: '',
        city: '',
        state: '',
        price_per_night: '',
        title: '',
    }

    //States  
    const [properties, setProperties] = useState([])

    const [userData, setUserData] = useState([])

    const [currentProperty, setCurrentProperty] = useState(initialProperty)


   

    // Initial Fetch All Properties
    useEffect(function ()
    {
        fetch("http://localhost:9292/properties")
            .then(function (resp)
            {
                return resp.json()
            })
            .then(function (data)
            {
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

    // IGNORE
    // const adminUser = {
    //     email: "admin@admin.com",
    //     password: "123admin"
    // }

    // WORK THIS OUT JERROD
    const [user, setUser] = useState({ name: "", email: "" })

    // FOR JERROD
    const [error, setError] = useState("")

    function login(details)
    {
        // IGNORE
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


    
    // console.log(currentProperty)
    return (
        <div>
            <Header/>

            <Switch>

                <Route path='/properties/:id'>
                    <CurrentProperty 
                        currentProperty={currentProperty}
                    />
                </Route>

                <Route path='/properties'>
                    <PropertyContainer 
                        properties={properties}
                        setCurrentProperty={setCurrentProperty}
                        currentProperty={currentProperty} 
                    />
                </Route>

            </Switch>


        </div>
    )
}

export default App;