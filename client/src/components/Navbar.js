import React from 'react';
import { NavLink } from 'react-router-dom';
import Signout from './Auth/Signout';
import { AiOutlineCar } from 'react-icons/ai';
import './Navbar.css';

const Navbar = ({ session }) => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <NavLink exact to='/' className='nav-logo'>
          Easy Car <AiOutlineCar />
        </NavLink>
        {session && session.getCurrentUser ? (
          <NavbarAuth session={session} />
        ) : (
          <NavbarUnAuth />
        )}
      </div>
    </nav>
  );
};

const NavbarAuth = ({ session }) => (
  <>
    <ul className='nav-menu'>
      <li className='nav-item'>
        <NavLink exact to='/' className='nav-links'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/search'>Search</NavLink>
      </li>
      {session && session.getCurrentUser.role === 'admin' && (
        <li>
          <NavLink to='/car/add'>Add Car</NavLink>
        </li>
      )}
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
      <li>
        <Signout />
      </li>
    </ul>
    <h2>Welcome {session.getCurrentUser.firstName}</h2>
  </>
);

const NavbarUnAuth = () => (
  <ul>
    <li>
      <NavLink exact to='/'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to='/search'>Search</NavLink>
    </li>
    <li>
      <NavLink to='/signin'>Signin</NavLink>
    </li>
    <li>
      <NavLink to='/signup'>Signup</NavLink>
    </li>
  </ul>
);

export default Navbar;
