import { gql } from '@apollo/client';

export const GET_ALL_CARS = gql`
  query {
    getAllCars {
      _id
      brand
      model
      imageUrl
      category
      description
      ac
      isAvailable
      seat
      price
    }
  }
`;
