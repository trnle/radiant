import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* <i className="fab fa-github"></i>
      <i className="fab fa-linkedin"></i> */}
      <div id='footer-container'>
        <div id='by-line'>
          Developed by Tran Le
        <span role='img' aria-label='bee'> &#128029;</span>
        </div>
        <div id='footer-links'>
          <a href='http://tranle.dev/'>
            <img src='https://img.icons8.com/dusk/64/000000/web-design.png' alt="Icon linking to Tran's portfolio website" height='30' />
          </a>
          <a href='https://github.com/trnle/radiant'>
            <img src='https://img.icons8.com/dusk/64/000000/github.png' alt="Icon linking to Tran's GitHub" height='30' />
          </a>
          <a href='https://www.linkedin.com/in/trnle/'>
            <img src='https://img.icons8.com/dusk/64/000000/linkedin.png' alt="Icon linking to Tran's LinkedIn" height='30' />
          </a>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer;