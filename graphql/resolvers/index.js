exports.resolvers = {
  Query: {
    hello: () => 'Hello World',
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
  },
};
