import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARGUMENT_CARS } from '../../queries';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { MainCarStyled } from './AllCars';

const GetArgumentsCar = ({ match, history }) => {
  const { category } = match.params;
  const { loading, data, error } = useQuery(GET_ARGUMENT_CARS, {
    variables: { category },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h4>Error</h4>;

  return data.getArgumentCars.map(
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
    }) => (
      <MainCarStyled key={_id}>
        <GetArgumentsCarStyled key={_id}>
          <div
            className='card-img'
            onClick={() => history.push(`/cars/${_id}`)}
          >
            <img src={`/images/${objectId}.jpg`} alt='' width='500px' />
          </div>
          <div className='card-header'>
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
              <span>price: </span>${price}
            </p>
          </div>
          {isAvailable && <div className='btn'>Book now</div>}
        </GetArgumentsCarStyled>
      </MainCarStyled>
    ),
  );
};

const GetArgumentsCarStyled = styled.section`
  $cta: #fe8033;
  $bg: #2b3039;
  $text: #2d343e;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 30%;
  border-radius: 15px;
  flex-direction: column;
  position: relative;
  transform: scale(0.9);
  transition: 0.3s ease-in-out;
  margin-bottom: 50px;
  &:hover {
    background-color: rgb(98, 97, 102);
    transform: scale(1);
    cursor: pointer;
    .btn {
      background-color: rgb(91, 45, 129);
      color: white;
    }
  }
  .card_img {
    margin-top: 5vh;
    width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .card_header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    margin: 25px 0;
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
      text-align: center;
      color: rgba (#fff, 0.3);
      margin: 8px 0;
    }
    .price {
      font-size: 15px;
      color: $cta;
      vertical-align: top;
      span {
        font-size: 25px;
        display: inline-block;
      }
    }
  }
  .btn {
    width: 130px;
    height: 35px;
    font-size: 14px;
    border-radius: 35px;
    background-color: rgb(147, 128, 219);
    color: $text;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    margin-bottom: 5px;
  }
`;

export default withRouter(GetArgumentsCar);
