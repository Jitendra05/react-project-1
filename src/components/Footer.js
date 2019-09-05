import React from 'react';

const Footer = (props) => (
  <div className="footer">
    <div className="container">
       <h4 className="header__subtitle">{props.message}</h4>
    </div>
  </div>
);

Footer.defaultProps = {
  message: 'Udemy Course Project @ practice part 1'
}

export default Footer;
