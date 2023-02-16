//React Technologies
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import PropertyContainer from './components/PropertyContainer';
import Header from './components/Header';
import CurrentProperty from './components/CurrentProperty';
import Login from "./Login";
import MyAccount from "./components/MyAccount";
import FavoritePage from "./components/FavoritePage";
import NewReview from './components/NewReview';


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
    const [favorites, setFavorites] = useState([])

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
                // console.log(data)
                return setProperties(data)
            })
    }, [currentProperty])

    // useEffect(function ()
    // {
    //     fetch("http://localhost:9292/properties/favorites")
    //         .then(function (resp)
    //         {
    //             return resp.json()
    //         })
    //         .then(function (data)
    //         {
    //             console.log(data)
    //             return setFavorites(data)
    //         })
    // }, [])

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
                // console.log(data)
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

    useEffect(() =>
    {
        fetch(`http://localhost:9292/users/${userId}/favorite_properties`)
            .then((r) => r.json())
            .then((data) => setFavorites(data));
    }, [userId])

    const changeSearch = (value) =>
    {
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

    const initialFormData = { text: '' }
    
    const [formData, setFormData]=useState(initialFormData)

    return (
        <div className='App'>
            {(loggedIn === true) ? (


            <>
            <Header
                setLoggedIn = {setLoggedIn}
                currentUser = {currentUser}
            />

            <Switch>

                <Route path='/properties/new_review'>
                    <NewReview
                        formData={formData}
                        setFormData={setFormData}
                        currentProperty={currentProperty}
                        initialFormData={initialFormData}
                    />
                </Route>

                <Route path='/properties/:id'>
                    <CurrentProperty
                        setCurrentProperty={setCurrentProperty} 
                        currentProperty={currentProperty}
                        currentUser = {currentUser}
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

                <Route path='/favorites'>
                    <FavoritePage
                        userId={userId}
                        favorites={favorites}
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