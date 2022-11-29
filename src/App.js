import React from "react";
import "./css/main.css";
import "./css/account.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountHome from "./components/AccountHome";
import CreateGroup from "./components/CreateGroup";
import JoinGroup from "./components/JoinGroup";
import AccountSettings from "./components/AccountSettings";

import {useEffect, useState} from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, []);
  return (
    <div className="App">
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading ...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/account-home' element={<AccountHome />}/>
        <Route path='/account-settings' element={<AccountSettings />}/>
        <Route path='/create-group' element={<CreateGroup />}/>
        <Route path='/join-group' element={<JoinGroup />}/>
      </Routes>
    </div>
  );
}

export default App;
