import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import styled from 'styled-components';

// import './App.css';
import { Button } from './Button';
// import './HeroSection.css';

const HeroSection = () => {
  return (
    <HeroSectionStyled style={{ background: 'url(./assets/img-home.jpg)' }}>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1 className='heading'>Adventure awaits</h1>
      <p className='desc'>What are you waiting for</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn-outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn-primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <FaPlayCircle />
        </Button>
      </div>
    </HeroSectionStyled>
  );
};

const HeroSectionStyled = styled.div`
  background: url('/assets/img-home.jpg') center center/cover no-repeat;
  height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  .heading {
    color: #fff;
    font-size: 100px;
    margin-top: -100px;
  }
  .desc {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }
  .hero-btns {
    margin-top: 32px;
  }
  .btn {
    margin: 6px;
    .svg {
      margin-left: 4px;
    }
  }
`;

export default HeroSection;
