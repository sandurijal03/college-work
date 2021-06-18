import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { FaStar } from 'react-icons/fa';

import { RATECAR } from '../queries';

const Rating = ({ rating, session, _id }) => {
  const [ratings, setRatings] = useState(0);
  const [hover, setHover] = useState(null);

  const { email } = session.getCurrentUser;

  const [rateCar] = useMutation(RATECAR, {
    variables: {
      _id,
      email,
      rating,
    },
  });

  return (
    <RatingStyled>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        rating = ratings;

        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              className='input'
              value={ratings}
              // onClick={() => setRatings(ratingValue)}
              onClick={(e) => {
                e.preventDefault();
                rateCar().then((data) => {
                  setRatings(ratingValue);
                  data.data.rateCar.rating = ratings;
                  console.log('after', data.data.rateCar);
                });
              }}
            />
            <FaStar
              size={50}
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
  justify-content: left;
  align-items: center;
  min-height: 10vh;
  .input {
    display: none;
  }
`;

export default Rating;
