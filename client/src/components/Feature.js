import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaWallet, FaComments, FaPeopleCarry } from 'react-icons/fa';
import styled from 'styled-components';

function Feature() {
  return (
    <FeatureStyled id='skills'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
            <h1 className='font-weight-bold align-self-center mx-1'>
              Why choose
            </h1>
            <h1 className='section-title--special mx-1'>Easy Cars</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6 col-lg-3 text-center my-3'>
            <Link to='#' className='skills-icon p-2 rounded-circle'>
              <FaCar />
            </Link>
            <h6 className='text-uppercase font-weight-bold my-3'>
              many brands
            </h6>
            <div className='skills-underline'></div>
            <p className='w-75% mx-auto text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div className='col-sm-6 col-lg-3 text-center my-3'>
            <Link to='#' className='skills-icon p-2 rounded-circle'>
              <FaWallet />
            </Link>
            <h6 className='text-uppercase font-weight-bold my-3'>affordable</h6>
            <div className='skills-underline'></div>
            <p className='w-75% mx-auto text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div className='col-sm-6 col-lg-3 text-center my-3'>
            <Link to='#' className='skills-icon p-2 rounded-circle'>
              <FaComments />
            </Link>
            <h6 className='text-uppercase font-weight-bold my-3'>Support</h6>
            <div className='skills-underline'></div>
            <p className='w-75% mx-auto text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div className='col-sm-6 col-lg-3 text-center my-3'>
            <Link to='#' className='skills-icon p-2 rounded-circle'>
              <FaPeopleCarry />
            </Link>
            <h6 className='text-uppercase font-weight-bold my-3'>caring</h6>
            <div className='skills-underline'></div>
            <p className='w-75% mx-auto text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>
        </div>
      </div>
    </FeatureStyled>
  );
}

const FeatureStyled = styled.section`
  padding: 5px 0;
  .skills-icon {
    font-size: 3rem;
    color: #e3b505;
    background: rgb(216, 214, 214);
    &:hover {
      color: #e3b505;
    }
  }
  .skills-underline {
    width: 4rem;
    height: 0.3rem;
    background: #40acf1;
    margin: 1rem auto;
  }
`;

export default Feature;
