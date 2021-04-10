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
      <li>
        <NavLink exact to='/allcars' className='nav-links'>
          All Cars
        </NavLink>
      </li>
      <li>
        <NavLink to='/search' className='nav-links'>
          Search
        </NavLink>
      </li>
      {session && session.getCurrentUser.role === 'admin' && (
        <li>
          <NavLink to='/car/add' className='nav-links'>
            Add Car
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to='/profile' className='nav-links'>
          Profile
        </NavLink>
      </li>
      <li>
        <Signout />
      </li>
    </ul>
  </>
);

const NavbarUnAuth = () => (
  <ul className='nav-menu'>
    <li>
      <NavLink exact to='/allcars' className='nav-links'>
        All Cars
      </NavLink>
    </li>
    <li>
      <NavLink to='/search' className='nav-links'>
        Search
      </NavLink>
    </li>
    <li>
      <NavLink to='/signin' className='nav-links'>
        Signin
      </NavLink>
    </li>
    <li>
      <NavLink to='/signup' className='nav-links'>
        Signup
      </NavLink>
    </li>
  </ul>
);

export default Navbar;
