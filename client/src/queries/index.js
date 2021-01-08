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

// Users

export const SIGNIN_USER = gql`
  mutation($email: String!, $password: String!) {
    signinUser(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phone: String
    $age: String!
  ) {
    signupUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phone: $phone
      age: $age
    ) {
      token
    }
  }
`;
