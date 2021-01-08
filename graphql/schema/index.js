exports.typeDefs = `
  type Car {
    brand: String!
    model: String!
    imageUrl: String
    category: String!
    description: String!
    ac: Boolean!
    isAvailable: Boolean!
    seat: Int!
    price: Int!
  }

  type User {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: String!
    age: Int!
    favourites: [Car]
  }

  type Query {
    hello: String
  }

  type Mutation {
    addCar(brand: String!, model: String!,category: String!, description: String!, ac: Boolean!, isAvailable: Boolean!,seat: Int!,price: Int!): Car!
  }


`;
