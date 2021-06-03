import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../../store/session';
import DemoButton from "../DemoButton";
import './SignUp.css';

const SignUpForm = () => {
  useEffect(() => {
    document.title = 'Sign Up | Radiant';
    document.body.style = 'background-color: #F2CC8F';
  }, []);

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async e => {
    e.preventDefault();
    const data = await dispatch(signUp(username, email, password, repeatPassword))
    if (data.errors) {
      setErrors(data.errors)
    }

    if (password === repeatPassword && !errors) {
      await dispatch(signUp(username, email, password));
    }

    setPassword('');
    setRepeatPassword('');
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

  const checkPass = () => {
    if (password !== repeatPassword) {
      document.getElementById('password-field').style.borderColor = '#E34234';
      document.getElementById('confirm-password-field').style.borderColor = '#E34234';
      document.getElementById('signup-btn').disabled = true;
    }
    if (password === repeatPassword) {
      document.getElementById('password-field').style.borderColor = 'lightgray';
      document.getElementById('confirm-password-field').style.borderColor = 'lightgray';
      document.getElementById('signup-btn').disabled = false;
    }
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='signup-page-container'>
      <form onSubmit={onSignUp} id='signup-form'>
        <h1>Sign Up</h1>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className='form-label-input'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
            required
          ></input>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
            required
          ></input>
          <label>Password</label>
          <input
            id='password-field'
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
            onKeyUp={checkPass}
            required
          ></input>
          <label>Confirm Password</label>
          <input
            id='confirm-password-field'
            type='password'
            name='repeat_password'
            placeholder='Confirm password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            onKeyUp={checkPass}
            required={true}
          ></input>
          <button id='signup-btn' type='submit' disabled={true}>Sign Up</button>
          <DemoButton />
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
