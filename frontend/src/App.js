import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';

import PropertyContainer from './components/PropertyContainer';
import Header from './components/Header'

function App()
{
    //States  
    const [properties, setProperties] = useState([])

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

    return (
        <div>
            <Header/>

            <Switch>

              <Route path='/properties'>
                <PropertyContainer properties={properties} />
              </Route>

            </Switch>

        </div>
    )
}

export default App;