import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GetArgumentsCar from './GetArgumentsCar';

const CarItem = ({ path, label, src, text }) => {
  const handleClick = () => {
    return (
      <Link to={`/${label}/cars`}>
        <GetArgumentsCar />
      </Link>
    );
  };

  return (
    <CarItemStyled>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img
              className='cards__item__img img-fluid'
              alt='Travel'
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text' onClick={handleClick}>
              {text}
            </h5>
          </div>
        </Link>
      </li>
    </CarItemStyled>
  );
};

const CarItemStyled = styled.div`
  .cards__item {
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    @media only screen and (max-width: 1024px) {
      margin-bottom: 2rem;
    }

    .cards__item__link {
      display: flex;
      flex-flow: column;
      width: 100%;
      box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
      -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
      filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
      border-radius: 10px;
      overflow: hidden;
      text-decoration: none;
      .cards__item__pic-wrap {
        position: relative;
        width: 100%;
        padding-top: 67%;
        overflow: hidden;
        &::after {
          content: attr(data-category);
          position: absolute;
          bottom: 0;
          margin-left: 10px;
          padding: 6px 8px;
          max-width: calc((100%) - 60px);
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          background-color: #1f98f4;
          box-sizing: border-box;
        }
        .cards__item__img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          max-width: 100%;
          height: 100%;
          max-height: 100%;
          object-fit: cover;
          transition: all 0.2s linear;
          &:hover {
            transform: scale(1.1);
          }
        }
        .cards__item__info {
          padding: 20px 30px 30px;
          .cards__item__text {
            color: #252e48;
            font-size: 18px;
            line-height: 24px;
          }
        }
      }
    }
  }
`;

export default CarItem;
