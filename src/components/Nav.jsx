import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar.jsx';
import c from '../Nav.module.css';

function Nav({onSearch}) {
  return (
    
    <nav className={`${c.navBar}`}>
      <div >
        <Link to= '/'> <div > Weather App </div> </Link>
        <Link to='/about'> <div>About</div> </Link>
      </div>
      <SearchBar onSearch={onSearch}/>
    </nav>

  );
};

export default Nav;