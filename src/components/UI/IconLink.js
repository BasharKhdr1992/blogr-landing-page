import React from 'react';

const IconLink = ({ icon, alt, text, position, onClick }) => {
  const renderLayout =
    position && position === 'img-text' ? (
      <button onClick={onClick} className="dd-link">
        {text}
        <img src={icon} className="link-icon" alt={alt} />
      </button>
    ) : (
      <button onClick={onClick} className="dd-link">
        <img src={icon} className="link-icon" alt={alt} />
        {text}
      </button>
    );

  return renderLayout;
};

export default IconLink;
