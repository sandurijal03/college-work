const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Pragya');
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server is listening in port http://localhost:${process.env.PORT}`,
  ),
);
