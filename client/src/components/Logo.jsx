import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGameControllerB } from 'react-icons/io';

const Logo = () => {
  return (
    <Link to="/home" className="logo">
      <IoLogoGameControllerB className="icon" />
    </Link>
  );
};

export default Logo;
