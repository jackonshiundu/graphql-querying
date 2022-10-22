const express = require('express');
require('dotenv').config();
const cors = require('cors');
var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const colors = require('colors');
const connectDB = require('../config/db');
const port = process.env.PORT || 5000;

const app = express();

connectDB();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`server running on port: ${port}`));
