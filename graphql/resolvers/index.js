const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const createToken = (user, secret, expiresIn) => {
  const { email, firstName, lastName, age, phone } = user;
  return jwt.sign({ email, firstName, lastName, age, phone }, secret, {
    expiresIn,
  });
};

exports.resolvers = {
  Query: {
    getAllCars: async (parent, args, { Car }, info) => {
      const allCars = await Car.find().sort({ createdAt: 'desc' });
      return allCars;
    },
    getCar: async (parent, { _id }, { Car }, info) => {
      const car = await Car.findById({ _id });
      return car;
    },
    searchCar: async (parent, { searchTerm }, { Car }, info) => {
      if (searchTerm) {
        // search
        const searchResults = await Car.find(
          {
            $text: { $search: searchTerm },
          },
          {
            score: { $meta: 'textScore' },
          },
        ).sort({
          score: { $meta: 'textScore' },
        });
        return searchResults;
      } else {
        const cars = await Car.find().sort();

        return cars;
      }
    },
    getCurrentUser: async (parent, args, { currentUser, User }, info) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({ email: currentUser.email }).populate({
        path: 'favourites',
        model: 'Car',
      });
      return user;
    },
  },
  Mutation: {
    addCar: async (
      parent,
      {
        brand,
        model,
        category,
        description,
        ac,
        isAvailable,
        seat,
        price,
        age,
      },
      { Car },
      info,
    ) => {
      const newCar = await new Car({
        brand,
        model,
        category,
        description,
        ac,
        isAvailable,
        seat,
        price,
        age,
      });
      newCar.isAvailable = Boolean(+newCar.isAvailable);
      newCar.ac = Boolean(+newCar.ac);
      // newCar.age = +newCar.age;
      newCar.save();
      return newCar;
    },

    signinUser: async (parent, { email, password }, { User }, info) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User noot found');
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid Password');
      }
      return { token: createToken(user, process.env.SECRET, '1d') };
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
