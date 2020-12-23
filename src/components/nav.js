import React from 'react';
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-main">
        <li className="main-item">
          <Link to="/" activeClassName="current" title="LRP Design Home Page">Portfolio</Link>
        </li>
        <li className="main-item">
          <Link to="/about" activeClassName="current" title="About Us">About</Link>
        </li>
        <li className="main-item">
          <Link to="/contact" activeClassName="current" title="Contact Us">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;



{/* <header id="header">
<div className="wrap-logo">
  <a href="home.html" target="_self" title="LRP Design Home Page" tabIndex="1"><img src="images/lrp-logo.png" alt="LittleRedPlaneDesignLogo" title="HomePage" /></a>
</div>
  <nav id="nav">
    <ul className="nav-main">
      <li className="main-item"><a href="home.html" target="_self" title="LRP Design Home Page" tabIndex="2">Portfolio</a></li>
      <li className="main-item"><a href="about.html" target="_self" title="About Us" tabIndex="2">About</a></li>
      <li className="main-item"><a href="contact.html" target="_self" title="Contact Us" tabIndex="2">Contact</a></li>
    </ul>
  </nav>
</header> */}