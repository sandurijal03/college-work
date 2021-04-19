import React from 'react';
import { useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { GET_ALL_CARS } from '../../queries';

const AllCars = ({ history }) => {
  const { data, error, loading } = useQuery(GET_ALL_CARS);

  if (loading) return <h4>Loading</h4>;
  if (error) return <h4>Error</h4>;

  const allCars = data.getAllCars.map(
    ({
      objectId,
      brand,
      _id,
      model,
      imageUrl,
      category,
      description,
      price,
    }) => {
      return (
        <AllCarsStyled key={_id}>
          <div
            className='card-img'
            onClick={() => history.push(`/cars/${_id}`)}
          >
            <img
              src={`images/${objectId}.jpg`}
              alt=''
              style={{ width: '200px' }}
            />
          </div>
          <div className='card-header'>
            <h2>{model}</h2>
            <p>{description}</p>
            <p className='price'>${price}</p>
          </div>
          <div className='btn'>Book now</div>
        </AllCarsStyled>
      );
    },
  );
  return (
    <MainCarStyled>
      <h3>All Cars</h3>
      {allCars}
    </MainCarStyled>
  );
};

const MainCarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 50px auto;
  padding: 50px 0 0;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  h3 {
    position: absolute;
    left: 41%;
    top: 0;
    color: #fff;
    font-size: 3vw;
  }
`;

const AllCarsStyled = styled.div`
  $cta: #fe8033;
  $bg: #2b3039;
  $text: #2d343e;

  display: flex;
  justify-content: center;
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
    img {
      width: 220px;
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

export default withRouter(AllCars);
