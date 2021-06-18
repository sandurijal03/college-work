import React from 'react';
import { NavLink } from 'react-router-dom';
import Signout from './Auth/Signout';
import { AiOutlineCar } from 'react-icons/ai';
import styled from 'styled-components';

const Navbar = ({ session }) => {
  console.log(session);
  return (
    <NavbarStyled>
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
    </NavbarStyled>
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
  </ul>
);

const NavbarStyled = styled.nav`
  background-color: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    max-width: 1500px;
    .nav-logo {
      color: #fff;
      align-items: left;
      margin-left: 20px;
      cursor: pointer;
      text-decoration: none;
      font-size: 2rem;
      flex-grow: 1;
      &:hover {
        text-decoration: none;
        color: #fff;
      }
    }
    .nav-menu {
      display: flex;
      list-style: none;
      text-align: center;
      margin-right: 2rem;
      .nav-links {
        color: #fff;
        text-decoration: none;
        padding: 0.5rem 1rem;
        height: 100%;
        border-bottom: 3px solid transparent;
        &:hover {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
`;

export default Navbar;
