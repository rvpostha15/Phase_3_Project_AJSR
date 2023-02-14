import React, {useEffect, useState} from 'react';
import PropertyList from './components/PropertyList.js'

function App() {

  const url = "http://localhost:9292/properties";
  const [propertyList, setPropertyList] = useState([])

  //Initial Fetch All Properties
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPropertyList(data))
  },[])


  return (
    <div>
      <PropertyList 
            properties={propertyList}
      />
    </div>
  );
}

export default App;
