import React from 'react';
import { Link } from 'react-router-dom';
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
    <>
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
    </>
  );
};

export default CarItem;
