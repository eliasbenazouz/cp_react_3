import React from 'react';
import './App.css';
import ProfilPhoto from './Components/Profile/ProfilPhoto.js'
import FullName from './Components/Profile/FullName.js'
import Address from './Components/Profile/Address.js'

function App() {
  return (
    <React.Fragment>
      <div className="Container">
        <FullName />
        <Address />
        <ProfilPhoto />
      </div>
    </React.Fragment>
  );
}

export default App;
