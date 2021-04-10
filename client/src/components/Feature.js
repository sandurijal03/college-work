import React from 'react';
import './Feature.css';
import { Link } from 'react-router-dom';
import { FaCar, FaWallet, FaComments, FaPeopleCarry } from 'react-icons/fa';

function Feature() {
  return (
    <section className='skill py-5' id='skills'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
            <h1 className='font-weight-bold aligh-self-center mx-1'>
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
    </section>
  );
}

export default Feature;
