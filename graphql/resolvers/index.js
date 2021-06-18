const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createWriteStream } = require('fs');
const { join, parse } = require('path');
const { ApolloError, UserInputError } = require('apollo-server-errors');
const { signinValidator, signupValidator } = require('../../utils/validator');
const {
  pearsonCorrelation,
  recommendationEngine,
} = require('../../utils/algos');
const dataset = require('../../utils/dataset');

const createToken = (user, secret, expiresIn) => {
  const { email, firstName, lastName, age, phone } = user;
  return jwt.sign({ email, firstName, lastName, age, phone }, secret, {
    expiresIn,
  });
};

exports.resolvers = {
  Query: {
    getAllCars: async (parent, args, { Car }, info) => {
      try {
        const allCars = await Car.find().sort({ createdAt: 'desc' });
        return allCars;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    getCar: async (parent, { _id }, { Car }, info) => {
      try {
        const car = await Car.findById(_id);
        return car;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    getUserCar: async (parent, { email }, { Car }, info) => {
      const userCars = await Car.find({ email }).sort({
        createdDate: 'desc',
      });
      return userCars;
    },
    getRecommendation: async (parent, { firstName }) => {
      const recommendedCars = recommendationEngine(
        dataset,
        firstName,
        pearsonCorrelation,
      );
      return recommendedCars[1];
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
      const user = await User.findOne({ email: currentUser.email }).populate(
        'favourites.car',
      );
      return user;
    },
    getArgumentCars: async (parent, { category }, { Car }, info) => {
      let cars = await Car.find();
      return cars.filter((car) => car.category === category);
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
        imageUrl,
        ac,
        isAvailable,
        seat,
        price,
        age,
        objectId,
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
        imageUrl,
        seat,
        price,
        age,
        objectId,
      });
      newCar.isAvailable = Boolean(+newCar.isAvailable);
      newCar.ac = Boolean(+newCar.ac);
      // newCar.age = +newCar.age;
      newCar.save();
      return newCar;
    },
    // likeCar: async (parent, { _id, email }, { Car, User }, info) => {
    //   try {
    //     const car = await Car.findOneAndUpdate({ _id }, { $inc: { likes: 1 } });
    //     await User.findOneAndUpdate(
    //       {
    //         email,
    //       },
    //       {
    //         $addToSet: {
    //           favourites: _id,
    //         },
    //       },
    //     );
    //     return car;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
    rateCar: async (parent, { _id, email, rating }, { Car, User }, info) => {
      const car = await Car.findOneAndUpdate({ _id }, { $set: { rating } });
      let favBody = {
        car: _id,
        rating: rating,
      };

      const user = await User.findOneAndUpdate(
        { email },
        {
          $addToSet: {
            favourites: favBody,
          },
        },
        { new: true, runValidators: true },
      );

      return car;
    },
    // unlikeCar: async (parent, { _id, email }, { Car, User }, info) => {
    //   try {
    //     const car = await Car.findOneAndUpdate(
    //       {
    //         _id,
    //       },
    //       {
    //         $inc: {
    //           likes: -1,
    //         },
    //       },
    //     );
    //     const user = await User.findOneAndUpdate(
    //       {
    //         email,
    //       },
    //       { $pull: { favourites: _id } },
    //     );
    //     return car;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
    deleteUserCar: async (parent, { _id }, { Car }, info) => {
      const car = await Car.findOneAndRemove({ _id });
      return car;
    },
    signinUser: async (parent, { email, password }, { User }, info) => {
      const { errors, valid } = signinValidator(email, password);
      if (!valid) {
        throw new UserInputError(Object.values(errors)[0], { errors });
      }

      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new UserInputError('User not found');
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new UserInputError('Invalid Password');
        }
        return { token: createToken(user, process.env.SECRET, '1d') };
      } catch (err) {
        throw new ApolloError(err.message, '400');
      }
    },

    signupUser: async (
      parent,
      { firstName, lastName, email, password, phone, age },
      { User },
      info,
    ) => {
      const { errors, valid } = signupValidator(
        firstName,
        lastName,
        email,
        password,
      );
      if (!valid) {
        throw new UserInputError(Object.values(errors)[0], { errors });
      }

      try {
        const user = await User.findOne({ email });
        if (user) {
          throw new UserInputError('Email already exists');
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
      } catch (err) {
        throw new ApolloError(err.message, '400');
      }
    },
    singleUpload: async (_, { file }) => {
      let { filename, createReadStream } = await file;
      let stream = createReadStream();
      let { ext, name } = parse(filename);
      let URL = 'http://localhost:3001';
      name = name.replace(/([^a-z0-9 ]+)/gi, '-').replace(' ', '_');
      let serverFile = join(__dirname, `../../uploads/${name}${ext}`);
      let writeStream = await createWriteStream(serverFile);
      await stream.pipe(writeStream);
      serverFile = `${URL}${serverFile.split('uploads')[1]}`;
      return serverFile;
    },
  },
};
