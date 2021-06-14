import React, {useContext} from 'react';
import { Link } from 'react-router-dom';


function Nav() {

  return (
    <>

        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/products">
             <li>Products</li>
          </Link>
        </ul>
    </>
  );
}

export default Nav;
