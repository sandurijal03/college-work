import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import { GET_ALL_CARS } from '../../queries';

const AllCars = ({ history }) => {
  const { data, error, loading } = useQuery(GET_ALL_CARS);
  const AllCars = data && data.getAllCars;
  const [menuItems, setMenuItems] = useState(AllCars);

  const allCars =
    menuItems &&
    menuItems.map(
      ({
        objectId,
        brand,
        _id,
        model,
        imageUrl,
        category,
        ac,
        description,
        price,
        isAvailable,
        seat,
      }) => {
        return (
          <Box p={1} m={1} key={_id}>
            <Box className='card' key={_id}>
              <Box
                p={3}
                className='card_img'
                onClick={() => history.push(`/cars/${_id}`)}
              >
                <img
                  src={!objectId ? imageUrl : `/images/${objectId}.jpg`}
                  alt='all cars'
                  width='500px'
                />
              </Box>
              <Box className='card_header'>
                <h2>{model}</h2>
                <p>{description}</p>

                <p className='price'>
                  Rs.
                  <span>{price}</span>
                </p>
              </Box>
              {isAvailable && (
                <a href='https://esewa.com.np/#/home' target='__blank'>
                  <button className='btn'>Book Now</button>
                </a>
              )}
            </Box>
          </Box>
        );
      },
    );

  const filter = (button) => {
    if (button === 'All') {
      setMenuItems(AllCars);
      return;
    }
    const filteredData = AllCars.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };

  if (loading) return <h4>Loading</h4>;
  if (error) return <h4>Error</h4>;

  return (
    <MainCarStyled>
      <div className='buttons'>
        <button className='filter ' onClick={() => filter('All')}>
          All
        </button>
        <button className='filter ' onClick={() => filter('sedan')}>
          Sedan
        </button>
        <button className='filter ' onClick={() => filter('hatchback')}>
          Hatchback
        </button>
        <button className='filter ' onClick={() => filter('suv')}>
          SUV
        </button>
        <button className='filter ' onClick={() => filter('convertible')}>
          Convertible
        </button>
        <button className='filter ' onClick={() => filter('coupe')}>
          Coupe
        </button>
        <button className='filter ' onClick={() => filter('pickup')}>
          Pick Up
        </button>
      </div>
      <div className='heading'>
        <h3>Available Cars</h3>
      </div>
      <div className='content'>{allCars}</div>
    </MainCarStyled>
  );
};

export const MainCarStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-wrap: wrap;
  :hover {
    cursor: pointer;
  }
  img {
    height: 20em;
    width: 100%;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .card {
    margin: 1em 0 1em 2em;
  }
  .card_header {
    margin: 0.1em 0 1em 1.2em;
  }
  .buttons {
    display: flex;
    width: auto;
    margin: 2em 0.1em 1em 0.1em;
  }
  .heading {
    text-align: center;
    display: block;
    font-size: 2em;
  }
  .btn {
    margin: 0 0 0 0.7em;
    height: 50px;
    width: 192px;
    color: white;
    background-color: black;
    border: hidden;
    cursor: pointer;
    font-size: 1.5em;
    &:hover {
      color: black;
      background-color: white;
      border: solid;
      border-width: thin;
    }
  }
  .filter {
    margin: 0 0 0 0.7em;
    height: 50px;
    width: 192px;
    font-size: 1.5em;
    color: black;
    background-color: white;
    border: solid;
    border-width: thin;
    &:hover {
      color: white;
      background-color: black;
      border: hidden;
      cursor: pointer;
    }
  }
`;

export default withRouter(AllCars);
