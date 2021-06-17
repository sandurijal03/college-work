import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { GET_CAR } from '../../queries';
import Error from '../../lib/Error';
import Rating from '../Rating';

const CarPage = ({ match }) => {
  const { _id } = match.params;

  const { data, error, loading } = useQuery(GET_CAR, {
    variables: { _id },
  });

  if (loading) return <h2>Loading</h2>;

  const {
    model,
    price,
    objectId,
    brand,
    isAvailable,
    description,
    imageUrl,
    rating,
  } = data.getCar;

  return (
    <CarPageStyled>
      <div className='imgbox'>
        <img
          src={!objectId ? imageUrl : `/images/${objectId}.jpg`}
          alt=''
          className='image'
        />
      </div>
      <div className='content'>
        <h3 className='model'>{model}</h3>
        <h5 className='brand'>{brand}</h5>
        <p className='price'>Price: NPR {price}</p>
        <p className='description'>{description}</p>
        <p>{isAvailable}</p>

        <Rating rating={rating} />
        {Boolean(isAvailable) !== true ? (
          ''
        ) : (
          <a href='https://esewa.com.np/#/home' target='__blank'>
            <button className='bookNow'>Book Now</button>
          </a>
        )}
      </div>
      {error && <Error error={error} />}
    </CarPageStyled>
  );
};

const CarPageStyled = styled.div`
  display: flex;
  justify-content: center;
  .imgbox {
    .image {
      position: relative;
      top: 50px;
      left: 50px;
      width: 80%;
      height: auto;
    }
  }
  .content {
    position: relative;
    top: 50px;
    width: 50%;
    padding-right: 10px;
    .model {
      margin-bottom: 10px;
    }
    .description,
    .price {
      margin-bottom: 10px;
    }
    .bookNow {
      cursor: pointer;
      font-size: 20px;
      margin-top: 10px;
      color: white;
      text-decoration: none;
      width: 90%;
      height: 20%;
      background: rgba(0, 0, 0, 0.897);
      &:hover {
        color: rgba(0, 0, 0, 0.897);
        background-color: white;
      }
    }
  }
`;

export default withRouter(CarPage);
