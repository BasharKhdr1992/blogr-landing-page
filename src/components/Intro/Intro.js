import React from 'react';
import './Intro.css';
import Navbar from '../Navbar/Navbar';
import Button from '../UI/Button';

const Intro = () => {
  return (
    <div className="intro">
      <Navbar />
      <h1 className="intro-header">A modern publishing platform</h1>
      <p className="intro-para">
        Grow your audience and build your online brand
      </p>
      <div className="btn-section">
        <Button className={'btn-primary'}>Start For Free</Button>
        <Button className={'btn-secondary'}>Learn More</Button>
      </div>
    </div>
  );
};

export default Intro;
