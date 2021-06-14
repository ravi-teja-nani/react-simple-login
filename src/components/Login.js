import React, { useContext, useState } from 'react';
import { AuthData } from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';
function Login() {
  const { isLogged, toggleLogin, toggleLogout, preLoad } = useContext(AuthData);
  let history = useHistory();

  function logIn(){
    toggleLogin()
  }
  function logOut(){
    toggleLogout()
    history.push("/");
  }
  
  return (
    <>
      <h1>{isLogged ? 'logout' : 'Login to Explore'}</h1>
      {isLogged ? <button onClick = {logOut}>logout</button> : <button onClick={logIn}>login</button>}
    </>
  );
}

export default Login;
