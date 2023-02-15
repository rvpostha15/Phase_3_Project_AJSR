//React Technologies
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import PropertyContainer from './components/PropertyContainer';
import Header from './components/Header';
import CurrentProperty from './components/CurrentProperty';
import Login from "./Login";
import MyAccount from "./components/MyAccount"


function App()
{

    //States  
    const [properties, setProperties] = useState([])
    const [userData, setUserData] = useState([])
    const [currentProperty, setCurrentProperty] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [userId, setUserId] = useState(null)
    const [currentUser, setCurrentUser] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    // WORK THIS OUT JERROD
    const [user, setUser] = useState({ name: "", email: "" })
    // FOR JERROD
    const [error, setError] = useState("")




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
                console.log(data)
                return setProperties(data)
            })
    }, [])

    //Initial Fetch All User Data
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

    // Fetch CurrentUserData Based On Login Info
    useEffect(() =>
    {
        fetch(`http://localhost:9292/users/${userId}`)
            .then((r) => r.json())
            .then((data) => setCurrentUser(data));
    }, [userId])

    const changeSearch = (value) => {
        setSearchTerm(value)
    }

    //Display Properties via Search: Title or State
    const filteredProperties = properties.filter(p => (
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.state.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    function login(details)
    {
        const mappedUsers = userData.map(function (user)
        {
            if (user.email == details.email && user.password == details.password) {
                console.log("logged in")
                setLoggedIn(true)
                return (
                    //setUserId State Is Used to Target & Fetch Current Logged-In User Data
                    setUserId(user.id),
                    //
                    setUser({
                        name: details.name,
                        email: details.email
                    }))
            } else {
                console.log("details do not match")
            }
        })
    }

    return (
        <div className='App'>
            {(loggedIn === true) ? (

            <>
            <Header
                setLoggedIn = {setLoggedIn}
                currentUser = {currentUser}
            />

            <Switch>

                <Route path='/properties/:id'>
                    <CurrentProperty 
                        currentProperty={currentProperty}
                    />
                </Route>

                <Route path='/properties'>
                    <PropertyContainer 
                        properties={filteredProperties}
                        setCurrentProperty={setCurrentProperty}
                        currentProperty={currentProperty} 
                        searchTerm={searchTerm}
                        changeSearch={changeSearch}
                    />
                </Route>

                <Route path='/:user'>
                    <MyAccount 
                         currentUser={currentUser}
                    />
                 </Route>

                    </Switch>
                </>
            ) : (
                // a login route/path would probably be helpful. as is, we can login while remaining in the path where we log out
                <Login login={login} error={error} />
            )
            }
        </div>
    )
}

export default App;