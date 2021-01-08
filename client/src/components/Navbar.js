import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ session }) => {
  return (
    <nav>
      {session && session.getCurrentUser ? (
        <NavbarAuth session={session} />
      ) : (
        <NavbarUnAuth />
      )}
    </nav>
  );
};

const NavbarAuth = ({ session }) => (
  <>
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
        <NavLink to='/car/add'>Add Car</NavLink>
      </li>
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
      <li>
        <button>Signout</button>
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
