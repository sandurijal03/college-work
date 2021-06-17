const { Schema, model } = require('mongoose');

const carSchema = new Schema(
  {
    objectId: {
      type: String,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      required: true,
    },
    ac: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seat: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
    },
    likes: {
      type: Number,
      default: 0,
    },
    username: {
      type: String,
    },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

carSchema.index({
  '$**': 'text',
});

module.exports = model('Car', carSchema);
