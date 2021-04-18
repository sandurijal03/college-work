import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import {
  FaCar,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterStyled>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Easy Cars newsletter to receive our best and cheapest car
          deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              EASY CARS
              <FaCar />
            </Link>
          </div>
          <small className='website-rights'>EASY CARS © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebookF />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </section>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  background-color: #242424;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .footer-subscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
    p {
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    }
    .footer-subscription-heading {
      margin-bottom: 24px;
      font-size: 24px;
    }
    .footer-subscription-text {
      margin-bottom: 24px;
      font-size: 20px;
    }
    .footer-input {
      padding: 8px 20px;
      border-radius: 2px;
      margin-right: 10px;
      outline: none;
      border: none;
      font-size: 18px;
      margin-bottom: 16px;
      border: 1px solid #fff;
      @media screen and (max-width: 820px) {
        width: 100%;
      }
    }
  }
  .footer-links {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
      padding-top: 2rem;
    }

    .footer-link-wrapper {
      display: flex;
      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
      .footer-link-items {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 16px;
        text-align: left;
        width: 160px;
        box-sizing: border-box;
        h2 {
          margin-bottom: 16px;
          color: #fff;
        }
        a {
          color: #fff;
          text-decoration: none;
          margin-bottom: 0.5rem;
          &:hover {
            color: #e9e9e9;
            transition: 0.3s ease-out;
          }
        }
      }
    }
  }

  .website-rights {
    color: #fff;
    margin-bottom: 16px;
  }

  .social-media {
    max-width: 1000px;
    width: 100%;
    .social-media-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      max-width: 1000px;
      margin: 40px auto 0 auto;
      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
      .social-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 240px;
        svg {
          color: #fff;
        }
      }
      .social-logo {
        color: #fff;
        justify-self: start;
        margin-left: 20px;
        cursor: pointer;
        text-decoration: none;
        font-size: 2rem;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        &:hover {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;

export default Footer;
