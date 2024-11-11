import React from 'react';

const Header = ({ title }) => {
  return (
    <header className='bg-black fixed w-full z-30 ms-auto backdrop-blur-md shadow-lg '>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
      </div>
    </header>
  );
};

export default Header;