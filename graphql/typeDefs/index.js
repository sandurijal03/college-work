exports.typeDefs = `
  type Car {
    _id: ID!
    brand: String!
    model: String!
    imageUrl: String
    category: String!
    description: String
    ac: String!
    isAvailable: String!
    seat: Int!
    price: Int!
    age: Int!
    objectId:String
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: String!
    age: Int!
    phone:String
    favourites: [Car]
  }

  type Query {
    getAllCars: [Car]
    getCar(_id:ID!):Car
    searchCar(searchTerm: String): [Car]
    getUserCar(username: String!): [Car]

    getCurrentUser: User
  }

  type Token {
    token: String!
  }



  type Mutation {
    singleUpload(file: Upload!): String!

    addCar(brand: String!, model: String!,category: String!, description: String, ac: String!, isAvailable: String!,seat: Int!,price: Int!, age: Int!, imageUrl:String, objectId: String): Car!
    
    likeCar(_id:ID!, username:String) : Car
    
    unlikeCar(_id:  ID!, username:String): Car

    deleteUserCar(_id:ID):Car

    signinUser(email: String!, password: String!): Token

    signupUser(firstName: String!, lastName: String!, email: String!, password: String!, age: String!, phone: String): Token
  }
`;
