const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { join } = require('path');

const User = require('./models/User');
const Car = require('./models/Car');

const { resolvers } = require('./graphql/resolvers');
const { typeDefs } = require('./graphql/typeDefs');
const isAuth = require('./middlewares/is-auth');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, './uploads')));
app.use(isAuth);

const server = new ApolloServer({
  resolvers,
  typeDefs,
  playground: {
    endpoint: '/graphql',
  },
  context: ({ req: { currentUser } }) => {
    return {
      currentUser,
      User,
      Car,
    };
  },
});

server.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: 'http://localhost:3000',
  },
});

mongoose
  .connect('mongodb://localhost:27017/college-work', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
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
