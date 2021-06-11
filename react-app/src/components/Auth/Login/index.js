import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../../store/session';
import DemoButton from '../DemoButton';
import './Login.css';

const LoginForm = () => {
  useEffect(() => {
    document.title = 'Log In | Radiant';
    document.body.style = 'background-color: #F2CC8F';
  }, []);

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onLogin = async e => {
    e.preventDefault();
    const data = await dispatch(login(email, password));

    if (data.errors) {
      setErrors(data.errors);
    } 
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div id='login-page-container'>
      <form onSubmit={onLogin} id='login-form'>
        <h1>Log In</h1>
        <div>
          {errors.map(error => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <div className='form-label-input'>
          <label htmlFor='email'>Email</label>
          <input
            name='mail'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button className='auth-btn' type='submit'>Login</button>
          <DemoButton />
          <div className='redirect-form'>
            Don't have an account?
            <NavLink to='/signup'> Sign up here.</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
