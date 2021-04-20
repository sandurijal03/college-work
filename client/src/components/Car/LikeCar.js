import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import withSession from '../withSessions';

import { GET_CAR, LIKE_CAR, UNLIKE_CAR } from '../../queries';

const LikeCar = ({ session, _id, refetch }) => {
  const [email, setEmail] = useState('');
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (session.getCurrentUser) {
      const { email, favourites } = session.getCurrentUser;
      const prevLiked =
        favourites.findIndex((favourite) => favourite._id === _id) > 1;
      setEmail(email);
      setLiked(prevLiked);
    }
  }, [session.getCurrentUser, _id]);

  const updateLike = (cache, { data: { likeCar } }) => {
    const { getCar } = cache.readQuery({ query: GET_CAR });
    cache.writeQuery({
      query: GET_CAR,
      data: {
        getCar: { ...getCar, likes: likeCar + 1 },
      },
    });
  };

  const [likeCar] = useMutation(LIKE_CAR, {
    variables: {
      _id,
      email,
    },
    update: updateLike,
  });

  const updateUnLike = (cache, { data: { likeCar } }) => {
    const { getCar } = cache.readQuery({ query: GET_CAR });
    cache.writeQuery({
      query: GET_CAR,
      data: {
        getCar: { ...getCar, likes: likeCar - 1 },
      },
    });
  };

  const [unlikeCar] = useMutation(UNLIKE_CAR, {
    variables: {
      _id,
      email,
    },
    update: updateUnLike,
  });

  const handleLike = (likeCar, unlikeCar) => {
    if (liked) {
      likeCar().then(async ({ data }) => {
        await refetch();
      });
    } else {
      unlikeCar().then(async ({ data }) => {
        await refetch();
      });
    }
  };

  const handleClick = (likeCar, unlikeCar) => {
    setLiked(
      (prevState) => !prevState,
      () => handleLike(likeCar, unlikeCar),
    );
  };

  return (
    email && (
      <button onClick={() => handleClick(likeCar, unlikeCar)}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    )
  );
};

export default withSession(LikeCar);
