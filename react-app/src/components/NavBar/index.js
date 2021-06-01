import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className='nav-bar-links'>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
       </NavLink>
      </div>
      <div className='nav-bar-links'>
        <NavLink to='/login' exact={true} activeClassName='active'>
          Log In
      </NavLink>
      </div>
      <div className='nav-bar-links'>
        <NavLink to='/signup' exact={true} activeClassName='active'>
          Sign Up
        </NavLink>
      </div>
      <LogoutButton />
    </nav>
  );
}

export default NavBar;