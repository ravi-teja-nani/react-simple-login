import React from 'react';
import {Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import { ProductType } from './ComponentExports'

function Products(){
let {url, path} = useRouteMatch();
  return <div>
    <h2>Select products</h2>
    <hr/>
    <ul>
    <Link to={url}>
       <li>All products</li>
    </Link>
    <Link to={`${url}/tshirts`}>
      <li>T-Shirts</li>
    </Link>
    <Link to={`${url}/jeans`}>
     <li>Jeans</li>
    </Link>
    <Link to={`${url}/footwear`}>
      <li>Foot Wear</li>
    </Link>
   </ul>
    <Switch>
       <Route exact path={path}>
           <h4>Shirts, Pants, Clothing, footwear, Fashion</h4>
       </Route>
       <Route path={`${path}/:productType`} component={ProductType}/>
    </Switch>
  </div>
}

export default Products