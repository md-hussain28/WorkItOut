import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed w-full bg-blue-900 px-4 py-2 flex justify-between items-center'>
      <div className='flex items-center'>
        <img className='w-6' src="src/assets/react.svg" alt="logo" />
        <h1 className='text-white ml-2 text-xl font-bold'>WorkItOut</h1>
      </div>
      <div className='hidden sm:flex w-2/3 justify-around'>
        <Link to="/" className='text-white'>
          <div className='hover:bg-cyan-400 hover:text-black px-3 py-1 rounded-xl'>
            <h2>Home</h2>
          </div>
        </Link>
        <Link to="/gym" className='text-white'>
          <div className='hover:bg-cyan-400 hover:text-black px-3 py-1 rounded-xl'>
            <h2>Gym</h2>
          </div>
        </Link>
        <Link to="/track" className='text-white'>
          <div className='hover:bg-cyan-400 hover:text-black px-3 py-1 rounded-xl'>
            <h2>Track</h2>
          </div>
        </Link>
      </div>
      <div>
        <button className='text-white'>
          <h1>Sign In</h1>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
