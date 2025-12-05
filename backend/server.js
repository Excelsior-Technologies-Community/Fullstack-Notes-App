const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const notesRoute = require('./routes/notesRoute');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRoute);

app.use(errorHandler);

const start = async () => {
  await connectDB();
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

start();
