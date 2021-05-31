import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { authenticate } from './store/session';

function App() {
  // const user = useSelector(state => state.session.user);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <Login />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUp />
        </Route>
        <ProtectedRoute path='/' exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
