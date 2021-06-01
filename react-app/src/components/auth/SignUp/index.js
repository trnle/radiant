import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../../store/session';
import './SignUp.css';

const SignUpForm = () => {
  useEffect(() => {
    document.title = 'Sign Up | Radiant';
    document.body.style = 'background-color: #F2CC8F';
  }, []);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async e => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = e => {
    setUsername(e.target.value);
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = e => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='signup-page-container'>
      <form onSubmit={onSignUp} id='signup-form'>
        <h1>Sign Up</h1>
        <div className='form-label-input'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
          ></input>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
          ></input>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
          ></input>
          <label>Confirm Password</label>
          <input
            type='password'
            name='repeat_password'
            placeholder='Confirm password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
          <button className='auth-btn' type='submit'>Sign Up</button>
          <button className='auth-btn'>Demo User</button>
          <div className='redirect-form'>
            Already have an account?
            <NavLink to='/login'> Log in here.</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
