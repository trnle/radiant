import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import Profile from './Profile';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  let sessionLinks;

  if (user) {
    sessionLinks = (
      <div className='session-links'>
        <div id='left-bar-links'>
          <SearchBar />
        </div>
        <div id='right-bar-links'>
          <NavLink to='/products' exact={true} id='products-nav'>Products</NavLink>
          <NavLink to='/' exact={true} id='routine-nav'>Routine</NavLink>
          <NavLink to='/journal' exact={true} id='journal-nav'>Journal</NavLink>
          <Profile />
        </div>
      </div>
    )
  } else {
    sessionLinks = (
      <div className='session-links'>
        <div id='right-bar-links'>
          <NavLink to='/login' id='login-nav' exact={true}>Log In</NavLink>
          <NavLink to='/signup' id='signup-nav' exact={true}>Sign Up</NavLink>
          <NavLink to='/guide' exact={true} id='guide-nav'>About Us</NavLink>
        </div>
      </div>
    )
  }

  return (
    <nav>
      <div id='nav'>
        <NavLink to='/' exact={true} className='nav-bar-links' id='radiant-home'>Radiant</NavLink>
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;