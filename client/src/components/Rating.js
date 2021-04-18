import React, { useState } from 'react';
import styled from 'styled-components';

import { FaStar } from 'react-icons/fa';

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <RatingStyled>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type='radio'
              name='rating'
              className='input'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={100}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </RatingStyled>
  );
};

const RatingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .input {
    display: none;
  }
`;

export default Rating;
