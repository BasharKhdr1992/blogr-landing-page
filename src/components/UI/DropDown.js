import React, { useState } from 'react';
import './DropDown.css';
import Button from './Button';
import assets from '../../assets';
import DropDownDivider from './DropDownDivider';
import IconLink from './IconLink';
import NestedDropDown from './NestedDropDown';

const DropDown = () => {
  const [dropdowns, setDropdowns] = useState({
    product: false,
    company: false,
    connect: false,
  });

  const toggleDropdown = (dropdown) => {
    dropdown = dropdown.toLowerCase();

    setDropdowns((prev) => {
      let newState = { ...prev };

      for (let k of Object.keys(prev)) {
        if (k === dropdown) {
          newState[k] = !prev[k];
        }
      }

      return newState;
    });
  };

  return (
    <div className="mobile-dropdown">
      <ul className="dd-list">
        <li>
          <IconLink
            icon={dropdowns.product ? assets.arrowUpDark : assets.arrowDownDark}
            text="Product"
            onClick={() => toggleDropdown('product')}
            alt={'product dorpdown arrow'}
            position="img-text"
          />
          {dropdowns.product && (
            <NestedDropDown
              links={[
                'Overview',
                'Pricing',
                'Marketplace',
                'Features',
                'Integrations',
              ]}
            />
          )}
        </li>
        <li>
          <IconLink
            icon={dropdowns.company ? assets.arrowUpDark : assets.arrowDownDark}
            onClick={() => toggleDropdown('company')}
            text="Company"
            alt={'company dorpdown arrow'}
            position="img-text"
          />
          {dropdowns.company && (
            <NestedDropDown links={['About', 'Team', 'Blog', 'Careers']} />
          )}
        </li>
        <li>
          <IconLink
            icon={dropdowns.connect ? assets.arrowUpDark : assets.arrowDownDark}
            onClick={() => toggleDropdown('connect')}
            text="Connect"
            alt={'connect dorpdown arrow'}
            position="img-text"
          />
          {dropdowns.connect && (
            <NestedDropDown links={['Contact', 'Newsletter', 'LinkedIn']} />
          )}
        </li>
        <li>
          <DropDownDivider />
        </li>
        <li>
          <button className="dd-link">Login</button>
        </li>
        <li>
          <Button className={'btn-secondary btn-gradient'}>Sign up</Button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
