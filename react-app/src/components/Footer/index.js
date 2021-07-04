import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div id='footer-container'>
      <div id='by-line'>
        Developed by Tran Le
        <span role='img' aria-label='bee'> &#128029;</span>
      </div>
      <div id='footer-links'>
        <a href='http://tranle.dev/' target='_blank' rel='noopener noreferrer'>
          <img src='https://img.icons8.com/dusk/64/000000/web-design.png' alt="Icon linking to Tran's portfolio website" height='30' />
        </a>
        <a href='https://github.com/trnle/radiant' target='_blank' rel='noopener noreferrer'>
          <img src='https://img.icons8.com/dusk/64/000000/github.png' alt="Icon linking to Tran's GitHub" height='30' />
        </a>
        <a href='https://www.linkedin.com/in/trnle/' target='_blank' rel='noopener noreferrer'>
          <img src='https://img.icons8.com/dusk/64/000000/linkedin.png' alt="Icon linking to Tran's LinkedIn" height='30' />
        </a>
      </div>
    </div>
  )
}

export default Footer;