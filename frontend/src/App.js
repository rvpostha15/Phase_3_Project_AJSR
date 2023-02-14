
import PropertyContainer from './components/PropertyContainer'
import React, { useState, useEffect } from 'react'

function App() {
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
                console.log(data)
                return setProperties(data)
            })
    }, [])

    return (
        <div>
            <PropertyContainer properties={properties} />
        </div>
    )
}

export default App;