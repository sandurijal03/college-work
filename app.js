const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const User = require('./models/User');
const Car = require('./models/Car');

const { resolvers } = require('./graphql/resolvers');
const { typeDefs } = require('./graphql/typeDefs');

const app = express();

app.use(express.json());
app.use(cors());

const server = new ApolloServer({
  resolvers,
  typeDefs,
  playground: {
    endpoint: '/graphql',
  },
  context: {
    User,
    Car,
  },
});

server.applyMiddleware({ app });

mongoose
  .connect('mongodb://localhost:27017/college-work', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(
        `Server is listening in port http://localhost:${process.env.PORT}`,
      ),
    );
    console.log('Database connected');
  })
  .catch((err) => console.log(err));
