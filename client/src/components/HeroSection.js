import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <h1 className='heading'>Adventure Awaits</h1>
      <p className='desc'>What are you waiting for</p>
    </HeroSectionStyled>
  );
};

const HeroSectionStyled = styled.div`
  background: url('images/img-home.jpg') center center/cover no-repeat;
  height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
  }

  .heading {
    color: #fff;
    font-size: 100px;
    margin-top: -100px;
    @media screen and (max-width: 960px) {
      font-size: 70px;
      margin-top: -150px;
    }

    @media screen and (max-width: 960px) {
      font-size: 50px;
      margin-top: -100px;
    }
  }
  .desc {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    @media screen and (max-width: 960px) {
      font-size: 30px;
    }
  }
  .hero-btns {
    margin-top: 32px;
  }
  .btn {
    margin: 6px;
    @media screen and (max-width: 960px) {
      width: 100%;
    }
    .svg {
      margin-left: 4px;
    }
  }
`;

export default HeroSection;
