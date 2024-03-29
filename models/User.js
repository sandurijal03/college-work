const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

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
      type: String,
    },
    favourites: [
      {
        car: {
          type: ObjectId,
          ref: 'Car',
        },
        rating: Number,
      },
    ],
    phone: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next();
  }
  bcrypt.genSalt(12, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

const User = model('User', userSchema);

module.exports = User;
