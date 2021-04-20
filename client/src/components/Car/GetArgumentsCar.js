import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARGUMENT_CARS } from '../../queries';
import { withRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { MainCarStyled } from './AllCars';

const GetArgumentsCar = ({ match, history }) => {
  const { category } = match.params;
  const { loading, data, error } = useQuery(GET_ARGUMENT_CARS, {
    variables: { category },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h4>Error</h4>;

  const argumentedCars = data.getArgumentCars.map(
    ({
      objectId,
      _id,
      model,
      brand,
      category,
      description,
      ac,
      seat,
      isAvailable,
      price,
      imageUrl,
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

              <p>
                <span>ac: </span>
                {ac.toString()}
              </p>
              <p>
                <span>seat: </span>
                {seat}
              </p>

              <p className='price'>
                Rs.
                <span>{price}</span>
              </p>
            </Box>
            {isAvailable && <button className='btn'>Book Now</button>}
          </Box>
        </Box>
      );
    },
  );
  return (
    <MainCarStyled>
      <div className='heading'>
        <h3> Cars</h3>
      </div>
      <div className='content'>{argumentedCars}</div>
    </MainCarStyled>
  );
};

export default withRouter(GetArgumentsCar);
