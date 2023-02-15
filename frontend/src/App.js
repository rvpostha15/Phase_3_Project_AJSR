import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';

import PropertyContainer from './components/PropertyContainer';
import Header from './components/Header'
import CurrentProperty from './components/CurrentProperty'

function App()
{
    //States  
    const [properties, setProperties] = useState([])
    const [currentProperty, setCurrentProperty] = useState()

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
    
    console.log(currentProperty)
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