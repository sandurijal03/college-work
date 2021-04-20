import { gql } from '@apollo/client';

// car queries
export const GET_ALL_CARS = gql`
  query {
    getAllCars {
      objectId
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

export const LIKE_CAR = gql`
  mutation($_id: ID!, $email: String!) {
    likeCar(_id: $_id, email: $email) {
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
      age
      objectId
      rating
    }
  }
`;

export const UNLIKE_CAR = gql`
  mutation($_id: ID!, $email: String!) {
    unlikeCar(_id: $_id, email: $email) {
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
      age
      objectId
      rating
    }
  }
`;

export const GET_RECOMMENDATION = gql`
  query($firstName: String) {
    getRecommendation(firstName: $firstName)
  }
`;

export const GET_ARGUMENT_CARS = gql`
  query($category: String!) {
    getArgumentCars(category: $category) {
      objectId
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
      objectId
      model
      imageUrl
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
    $imageUrl: String!
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
      imageUrl: $imageUrl
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
