import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import { login } from '../../../store/session';
import './Login.css';

const LoginForm = () => {
  document.title = 'Log In | Radiant';
  document.body.style = 'background-color: #F2CC8F';
  useEffect(() => {
    
  }, []);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async e => {
    e.preventDefault();
    const data = await dispatch(login(email, password));

    if (data.errors) {
      setErrors(user.errors);
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
      {/* <Helmet title='Log In | Radiant' bodyAttributes={{ style: 'background-color: #F2CC8F'}}/> */}
      <div id='login-form-container'>
        <h1>Log In</h1>
        <form onSubmit={onLogin} id='login-form'>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div className='form-label-input'>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='form-label-input'>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button className='login-btn' type="submit">Login</button>
            <button className='login-btn'>Demo User</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;
