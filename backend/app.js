require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const helmet = require('helmet');

const { errors } = require('celebrate');

const { PORT = 3001 } = process.env;

const mainErrorHandler = require('./middlewares/mainErrorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
app.use(cors());
app.use(helmet());
mongoose
  .connect('mongodb://127.0.0.1:27017/widget', {
    // MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
  })
  .then(() => {
    console.log('connected');
  })
  .catch(() => {
    console.log('no connection');
  });
app.use(express.json());

app.use(requestLogger);

app.use('/classes', require('./routes/classes'));

app.use(errorLogger);

app.use(errors());
app.use(mainErrorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
