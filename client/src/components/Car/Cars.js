import React from 'react';
import CarItem from './CarItem';
import styled from 'styled-components';

// import './Cars.css';

import SedanCar from '../assets/T3bdc4539U.png';
import convertibleCar from '../assets/tNHeWkCVBr.jpg';
import hatchbagCar from '../assets/owKsJpxQMy.jpg';
import coupeCar from '../assets/bIBwtlieZU.jpg';
import suvCar from '../assets/4fOA1olTnP.jpg';
import pickUp from '../assets/eJfSKUCGFS.jpg';

const Cars = (props) => {
  return (
    <CarsStyled>
      <h1>Check out Recent Imported Models</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CarItem
              src={SedanCar}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='sedan'
              path={`/sedan/cars`}
            />
            <CarItem
              src={convertibleCar}
              text='Experience Football on Top of the Himilayan Mountains'
              label='convertible'
              path='/convertible/cars'
            />
            <CarItem
              src={hatchbagCar}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='hatchbag'
              path='/hatchbag/cars'
            />
          </ul>
          <ul className='cards__items'>
            <CarItem
              src={coupeCar}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='coupe'
              path='/coupe/cars'
            />
            <CarItem
              src={suvCar}
              text='Experience Football on Top of the Himilayan Mountains'
              label='suv'
              path='/suv/cars'
            />
            <CarItem
              src={pickUp}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='pickup'
              path='/pickup/cars'
            />
          </ul>
        </div>
      </div>
    </CarsStyled>
  );
};

const CarsStyled = styled.div`
  padding: 4rem;
  background: #fff;
  h1 {
    text-align: 'center';
  }
  .cards__container {
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
    .cards__wrapper {
      position: relative;
      margin: 50px 0 45px;
      .cards__items {
        margin-bottom: 24px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;

export default Cars;
