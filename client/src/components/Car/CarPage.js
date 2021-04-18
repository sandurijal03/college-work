import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_CAR } from '../../queries';

import styled from 'styled-components';

const CarPage = ({ match }) => {
  const { _id } = match.params;

  const { data, error, loading } = useQuery(GET_CAR, {
    variables: { _id },
  });

  if (loading) return <h2>Loading</h2>;
  if (error) return <h3>Error</h3>;

  const { model, category, price } = data.getCar;

  return (
    <CarPageStyled>
      <div className='imgbox'>
        <img
          src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-lamborghini-aventador-svj-roadster-drive-107-1576871367.jpg?crop=0.825xw:0.620xh;0.138xw,0.329xh&resize=1200:*'
          alt='img'
          className='image'
        />
      </div>
      <div className='content'>
        <h3 className='model'>{model}</h3>
        <p className='price'>Price: ${price}</p>
        <p className='description'>
          lorem ipsum Lorem Ipsum is simply dummy text. Lorem Ipsum has been the
          printing and typesetting industry’s standard dummy text ever since the
          16th century, when an unknown printer took a galley of type and
          scrambled it to make a type sample book. It was popularised in the
          1960s with the release of Letraset sheets containing Lorem Ipsum
          passages. Lorem Ipsum is not simply random text. It has roots in a
          piece of classical Latin literature from 45 BC, making it over 2000
          years old. Its use infiltrates every discipline where the inclusion of
          dummy text is useful{' '}
        </p>
        <button className='bookNow'>Book Now</button>
      </div>
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
