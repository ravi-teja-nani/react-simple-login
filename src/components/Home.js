import React,{useState} from 'react';
import {Switch, Route, useHistory} from "react-router-dom";

import { Nav, Login, About, Contact, Products, LandingPage} from './ComponentExports';
import Modal from './Modal';

function Home({user}){

    const [isModalOn, SetIsModalOn] = useState(false)
 return (<div>
   <Modal isModalOn={isModalOn} SetIsModalOn={SetIsModalOn}/>
   <Nav/>
   <Login/>
   {user.id ? <div>welome {user.id}</div> : <> </>}

   <button onClick = {() => SetIsModalOn(true)}>open popup</button>
   <hr/> 
    <Switch>
     <Route exact path="/" component={LandingPage}/>
     <Route path={`/about`} component={About}/>
     <Route path={`/contact`} component={Contact}/>
     <Route path={`/products`} component={Products}/> 
    </Switch>      
 
 </div>)

}

export default Home;