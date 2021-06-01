import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* <i className="fab fa-github"></i>
      <i className="fab fa-linkedin"></i> */}
      <div id='by-line'>
        Developed by Tran Le &#128029;
      </div>
      <div id='footer-links'>
        <a href='http://tranle.dev/'>
          <img src='https://img.icons8.com/dusk/64/000000/web-design.png' height='30' />
        </a>
        <a href='https://github.com/trnle/radiant'>
          <img src='https://img.icons8.com/dusk/64/000000/github.png' height='30' />
        </a>
        <a href='https://www.linkedin.com/in/trnle/'>
          <img src='https://img.icons8.com/dusk/64/000000/linkedin.png' height='30' />
        </a>
      </div>
    </footer>
  )
}

export default Footer;