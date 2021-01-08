const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { email, firstName, lastName, age, phone } = user;
  return jwt.sign({ email, firstName, lastName, age, phone }, secret, {
    expiresIn,
  });
};

exports.resolvers = {
  Query: {
    getAllCars: async (parent, args, { Car }, info) => {
      const allCars = await Car.find();
      return allCars;
    },
  },
  Mutation: {
    addCar: async (
      parent,
      { brand, model, category, description, ac, isAvailable, seat, price },
      { Car },
      info,
    ) => {
      const newRecipe = await new Car({
        brand,
        model,
        category,
        description,
        ac,
        isAvailable,
        seat,
        price,
      }).save();
      return newRecipe;
    },
    signupUser: async (
      parent,
      { firstName, lastName, email, password, phone, age },
      { User },
      info,
    ) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error('User already exists');
      }
      const newUser = await new User({
        firstName,
        lastName,
        email,
        password,
        phone,
        age,
      }).save();
      return { token: createToken(newUser, process.env.SECRET, '1d') };
    },
  },
};
