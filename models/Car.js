const { Schema, model } = require('mongoose');

const carSchema = new Schema(
  {
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
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  },
);

carSchema.index({
  '$**': 'text',
});

const Car = model('Car', carSchema);

module.exports = Car;
