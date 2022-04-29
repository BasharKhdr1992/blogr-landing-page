import React from 'react';
import './Footer.css';
import Appendix from './Appendix';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <button className="btn-link footer-logo">Blogr</button>
        <div className="footer-nav">
          <h2>Product</h2>
          <div className="footer-nav-links">
            <button className="btn-link">Overview</button>
            <button className="btn-link">Pricing</button>
            <button className="btn-link">Marketplace</button>
            <button className="btn-link">Features</button>
            <button className="btn-link">Integration</button>
          </div>
        </div>
        <div className="footer-nav">
          <h2>Company</h2>
          <div className="footer-nav-links">
            <button className="btn-link">About</button>
            <button className="btn-link">Team</button>
            <button className="btn-link">Blog</button>
            <button className="btn-link">Careers</button>
          </div>
        </div>
        <div className="footer-nav">
          <h2>Connect</h2>
          <div className="footer-nav-links">
            <button className="btn-link">Contact</button>
            <button className="btn-link">Newsletter</button>
            <button className="btn-link">LinkedIn</button>
          </div>
        </div>
      </div>
      <Appendix />
    </div>
  );
};

export default Footer;
