import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
// import logo from '../../images/radiant-sparkles.png';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav>
      <NavLink to='/' exact={true} className='nav-bar-links' id='radiant-home'>Radiant</NavLink>
      {!user ? (
        <>
          <NavLink to='/login' exact={true}>Log In</NavLink>
          <NavLink to='/signup' exact={true}>Sign Up</NavLink>
        </>
      ) : (
        <>
          <NavLink to='/products' exact={true} id='products-nav'>Products</NavLink>
          <NavLink to='/' exact={true} id='routine-nav'>Routine</NavLink>
          <NavLink to='/journal' exact={true} id='journal-nav'>Journal</NavLink>
          <LogoutButton />
        </>
      )}
    </nav>
  );
}

export default NavBar;