exports.typeDefs = `
  type Car {
    _id: ID!
    brand: String!
    model: String!
    imageUrl: String
    category: String!
    description: String
    ac: String
    isAvailable: Boolean
    seat: Int!
    price: Int!
    age: Int!
    objectId:String
    rating:Int!
    email:String
  }

  type Favourites {
    _id:ID
    car:Car
    rating:Int
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
    favourites: [Favourites]!
    createdAt: String
  }

  type Query {
    getAllCars: [Car]
    getCar(_id:ID!):Car
    getRecommendation(firstName:String): [String]


    searchCar(searchTerm: String): [Car]
    getUserCar(email: String!): [Car]
    getArgumentCars(category: String!): [Car]!
    getCurrentUser: User
  }

  type Token {
    token: String!
  }


  input CarInput {
    _id: ID
    brand: String
    model: String
    imageUrl: String
    category: String
    description: String
    ac: Boolean
    isAvailable: Boolean
    seat: Int
    price: Int
    age: Int
    objectId:String
  }




  type Mutation {
    singleUpload(file: Upload!): String!

    addCar(brand: String!, model: String!,category: String!, description: String, ac: String!, isAvailable: String!,seat: Int!,price: Int!, age: Int!, imageUrl:String, objectId: String): Car!
    rateCar(_id:ID!, email:String,rating: Int!) : Car

    deleteUserCar(_id:ID):Car
    signinUser(email: String!, password: String!): Token
    signupUser(firstName: String!, lastName: String!, email: String!, password: String!, age: String!, phone: String): Token
  }
`;
