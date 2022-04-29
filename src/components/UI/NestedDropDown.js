import React from 'react';
import './NestedDropDown.css';

const NestedDropDown = ({ links }) => {
  return (
    <div className="nested-dropdown">
      {links.map((link, index) => {
        return (
          <button key={index} className="nested-dd-btn">
            {link}
          </button>
        );
      })}
    </div>
  );
};

export default NestedDropDown;
