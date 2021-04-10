const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createWriteStream } = require('fs');
const { join, parse } = require('path');
const akin = require('@asymmetrik/akin');

const createToken = (user, secret, expiresIn) => {
  const { email, firstName, lastName, age, phone } = user;
  return jwt.sign({ email, firstName, lastName, age, phone }, secret, {
    expiresIn,
  });
};

akin.activity.log('1', '2', ['brand', 'model', 'category', 'ac', 'likes']);
akin.run();

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
    getUserCar: async (parent, { email }, { Car }, info) => {
      const userCars = await Car.find({ email }).sort({
        createdDate: 'desc',
      });
      return userCars;
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
    likeCar: async (parent, { _id, email }, { Car, User }, info) => {
      const car = await Car.findOneAndUpdate({ _id }, { $inc: { likes: 1 } });
      const user = await User.findOneAndUpdate(
        {
          email,
        },
        {
          $addToSet: {
            favourites: _id,
          },
        },
      );
      return car;
    },
    unlikeCar: async (parent, { _id, email }, { Car, User }, info) => {
      const car = await Car.findOneAndUpdate(
        {
          _id,
        },
        {
          $inc: {
            likes: -1,
          },
        },
      );
      const user = await User.findOneAndUpdate(
        {
          username,
        },
        { $pull: { favourites: _id } },
      );
      return car;
    },
    deleteUserCar: async (parent, { _id }, { Car }, info) => {
      const car = await Car.findOneAndRemove({ _id });
      return car;
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
