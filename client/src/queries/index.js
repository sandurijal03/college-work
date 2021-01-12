import { gql } from '@apollo/client';

// car queries
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

export const GET_CAR = gql`
  query($_id: ID!) {
    getCar(_id: $_id) {
      _id
      brand
      model
      imageUrl
      description
      ac
      isAvailable
      price
    }
  }
`;

export const SEARCH_CAR = gql`
  query($searchTerm: String) {
    searchCar(searchTerm: $searchTerm) {
      _id
      model
    }
  }
`;

// car mutation
export const ADD_CAR = gql`
  mutation(
    $brand: String!
    $model: String!
    $category: String!
    $description: String!
    $ac: String!
    $isAvailable: String!
    $seat: Int!
    $price: Int!
    $age: Int!
  ) {
    addCar(
      brand: $brand
      model: $model
      category: $category
      description: $description
      ac: $ac
      isAvailable: $isAvailable
      seat: $seat
      price: $price
      age: $age
    ) {
      brand
      model
      category
      description
      ac
      isAvailable
      seat
      price
      age
    }
  }
`;

// Users Queries

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      firstName
      lastName
      email
      password
      role
      age
      phone
      favourites {
        _id
        brand
        model
      }
    }
  }
`;

// Users MUTATION

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
