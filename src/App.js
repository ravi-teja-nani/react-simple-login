import React, {lazy, Suspense, useContext, useEffect } from 'react';
import './style.css';
import {Login } from './components/ComponentExports';
import { AuthData } from './contexts/AuthContext';
import {useHistory, Switch, Router, Redirect} from "react-router-dom";
export default function App() {
   
  const LazyHome = lazy(()=>import("./components/ComponentExports").then(module => ({ default: module.Home })))
  const { isLogged, user, preLoad } = useContext(AuthData);
  
    return !isLogged ? <Login/> : ( preLoad ? <h1>Loading...</h1>:<Suspense fallback =" loading"><LazyHome user = {user}/></Suspense>)

}
