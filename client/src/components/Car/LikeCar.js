// import React, { useEffect, useState } from 'react';
// import { useMutation } from '@apollo/client';

// import withSession from '../withSessions';

// import { GET_CAR, LIKE_CAR, UNLIKE_CAR } from '../../queries';

// const LikeCar = ({ session, _id, refetch }) => {
//   const [email, setEmail] = useState('');
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     if (session.getCurrentUser) {
//       const { email, favourites } = session.getCurrentUser;
//       const prevLiked =
//         favourites.findIndex((favourite) => favourite._id === _id) > 1;
//       setEmail(email);
//       setLiked(prevLiked);
//     }
//   }, [session.getCurrentUser, _id]);

//   const updateLike = (cache, { data: { likeCar } }) => {
//     const { getCar } = cache.readQuery({ query: GET_CAR, variables: { _id } });

//     console.log(likeCar);

//     cache.writeQuery({
//       query: GET_CAR,
//       variables: { _id },
//       data: {
//         getCar: { ...getCar, likes: likeCar.likes + 1 },
//       },
//     });
//   };

//   const [likeCar] = useMutation(LIKE_CAR, {
//     variables: {
//       _id,
//       email,
//     },
//     update: updateLike,
//   });

//   const updateUnLike = (cache, { data: { likeCar } }) => {
//     const { getCar } = cache.readQuery({ query: GET_CAR, variables: { _id } });

//     cache.writeQuery({
//       query: GET_CAR,
//       variables: { _id },
//       data: {
//         getCar: { ...getCar, likes: likeCar.likes - 1 },
//       },
//     });
//   };

//   const [unlikeCar] = useMutation(UNLIKE_CAR, {
//     variables: {
//       _id,
//       email,
//     },
//     update: updateUnLike,
//   });

//   const handleLike = (likeCar, unlikeCar) => {
//     if (liked) {
//       likeCar().then(async ({ data }) => {
//         await refetch();
//       });
//     } else {
//       unlikeCar().then(async ({ data }) => {
//         await refetch();
//       });
//     }
//   };

//   return (
//     email && (
//       <button
//         onClick={() => {
//           setLiked(!liked);
//           handleLike(likeCar, unlikeCar);
//         }}
//       >
//         {liked ? 'Unlike' : 'Like'}
//       </button>
//     )
//   );
// };

// export default withSession(LikeCar);
