import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;