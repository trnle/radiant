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
      <div className='nav-bar-links'>
        <NavLink to='/' exact={true} id='radiant-home' activeClassName='active'>
          {/* <img src={logo} alt='Radiant sparkle icon' height='40' /> */}
          Radiant
       </NavLink>
      </div>
      <div id='other-nav-links'>
        {!user && <div className='nav-bar-links'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Log In
        </NavLink>
        </div>}
        {!user && <div className='nav-bar-links'>
          <NavLink to='/signup' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>}
        {user && <LogoutButton />}
      </div>
    </nav>
  );
}

export default NavBar;