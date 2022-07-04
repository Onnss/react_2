import React from "react";
import Adress from './Component/Profil/Adress';
import Name from './Component/Profil/FullName';
import Photoprofil from './Component/Profil/ProfilePhoto';
import './App.css';

function App() {
  return (
    <div className="App container card  shadow-lg p-3 mb-5 bg-body rounded mt-5 w-25" >
      <Photoprofil />
      <Name /> 
      <Adress />
    </div>
  );
}

export default App;
