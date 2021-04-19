import React from 'react';
import CarItem from './CarItem';
import styled from 'styled-components';

// import './Cars.css';

const Cars = (props) => {
  return (
    <CarsStyled>
      <h1>Check out Recent Imported Models</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CarItem
              src='images/T3bdc4539U.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='sedan'
              path={`/sedan/cars`}
            />
            <CarItem
              src='images/tNHeWkCVBr.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='convertible'
              path='/convertible/cars'
            />
            <CarItem
              src='images/owKsJpxQMy.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='hatchbag'
              path='/hatchbag/cars'
            />
          </ul>
          <ul className='cards__items'>
            <CarItem
              src='images/bIBwtlieZU.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='coupe'
              path='/coupe/cars'
            />
            <CarItem
              src='images/4fOA1olTnP.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='suv'
              path='/suv/cars'
            />
            <CarItem
              src='images/eJfSKUCGFS.jpg'
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
        @media screen and (max-width: 980) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
`;

export default Cars;
