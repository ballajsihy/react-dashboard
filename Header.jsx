import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify } from 'react-icons/bs';

// Define the HeyIcon component
const HeyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="icon" viewBox="0 0 16 16">
    <path d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5zm0 12A5.5 5.5 0 1 1 13.5 8 5.506 5.506 0 0 1 8 13.5z"/>
  </svg>
);

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <span>Hii Sharukh</span>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
