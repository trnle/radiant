import React from 'react';
import { useHistory} from 'react-router-dom';
import error404 from '../../images/404.png';
import './PageNotFound.css';

const PageNotFound = () => {
  const history = useHistory();
  
  return (
    <div id='pnf-page'>
      <h1>Sorry! The page you're looking for cannot be found.</h1>
      <img src={error404} alt='Page cannot be found' />
      <button onClick={() => history.push('/')}>Go to Radiant Home Page</button>
    </div>
  )
}

export default PageNotFound;