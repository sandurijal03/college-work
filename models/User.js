const { Schema, model } = require('mongoose');

const {
  Types: { ObjectId },
} = Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'],
    },
    password: {
      type: 'String',
      required: true,
    },
    age: {
      type: Number,
      default: 20,
      enum: [20, 21, 22, 23, 24, 25],
    },
    favourites: {
      type: ObjectId,
      ref: 'Car',
    },
  },
  { timestamps: true },
);

const User = model('User', userSchema);

module.exports = User;
