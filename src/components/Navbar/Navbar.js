import React, { useState } from 'react';
import './Navbar.css';
import assets from '../../assets';
import Button from '../UI/Button';
import DropDown from '../UI/DropDown';

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    product: false,
    company: false,
    connect: false,
  });

  const [mobileDropdown, setMobileDropdown] = useState(false);

  const toggleProductDd = () => {
    setDropdowns((prev) => ({
      ...prev,
      product: !prev.product,
    }));
  };

  const toggleCompanyDd = () => {
    setDropdowns((prev) => ({
      ...prev,
      company: !prev.company,
    }));
  };

  const toggleConnectDd = () => {
    setDropdowns((prev) => ({
      ...prev,
      connect: !prev.connect,
    }));
  };

  const toggleMobileDropdown = () => {
    setMobileDropdown((prev) => !prev);
  };

  return (
    <ul className="navbar">
      <li className="navlink">
        <button className="btn-logo mr-3">
          <img src={assets.logo} alt="Blogr" />
        </button>
      </li>
      <li className="navlink dropdown collapse">
        <button
          onClick={toggleProductDd}
          className="btn-link hover-underline mr-1 dropbtn"
        >
          <span className="mr-1">Product</span>
          <img
            className="dd-icon"
            src={dropdowns.product ? assets.arrowUp : assets.arrowDown}
            alt={`${
              dropdowns.product ? 'dropup' : 'dropdown'
            } arrow for product`}
          />
        </button>
        <div className={`dropdown-content ${dropdowns.product && 'active'}`}>
          <button className="dd-link">Overview</button>
          <button className="dd-link">Pricing</button>
          <button className="dd-link">Marketplace</button>
          <button className="dd-link">Features</button>
          <button className="dd-link">Integrations</button>
        </div>
      </li>
      <li className="navlink dropdown collapse">
        <button
          onClick={toggleCompanyDd}
          className="btn-link hover-underline mr-1 dropbtn"
        >
          <span className="mr-1">Company</span>
          <img
            className="dd-icon"
            src={dropdowns.company ? assets.arrowUp : assets.arrowDown}
            alt={`${
              dropdowns.company ? 'dropup' : 'dropdown'
            } arrow for company`}
          />
        </button>
        <div className={`dropdown-content ${dropdowns.company && 'active'}`}>
          <button className="dd-link">About</button>
          <button className="dd-link">Team</button>
          <button className="dd-link">Blog</button>
          <button className="dd-link">Careers</button>
        </div>
      </li>
      <li className="navlink dropdown collapse">
        <button
          onClick={toggleConnectDd}
          className="btn-link hover-underline mr-1 dropbtn"
        >
          <span className="mr-1">Connect</span>
          <img
            className="dd-icon"
            src={dropdowns.connect ? assets.arrowUp : assets.arrowDown}
            alt={`${
              dropdowns.connect ? 'dropup' : 'dropdown'
            } arrow for connect`}
          />
        </button>
        <div className={`dropdown-content ${dropdowns.connect && 'active'}`}>
          <button className="dd-link">Contact</button>
          <button className="dd-link">Newsletter</button>
          <button className="dd-link">LinkedIn</button>
        </div>
      </li>
      <li className="navlink right collapse">
        <Button className="btn-primary">Sign up</Button>
      </li>
      <li className="navlink right collapse">
        <button className="btn-link">Login</button>
      </li>
      <li className="navlink right collapse-menu">
        <button className="btn-logo" onClick={toggleMobileDropdown}>
          <img
            src={mobileDropdown ? assets.close : assets.menu}
            alt="menu icon"
          />
        </button>
        {mobileDropdown && <DropDown />}
      </li>
    </ul>
  );
};

export default Navbar;
