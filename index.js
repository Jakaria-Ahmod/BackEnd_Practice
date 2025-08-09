require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
const routes = require('./routes');
const DBCONNECT = require('./config/dbConnect');
const cors = require('cors');

app.use(express.json());
app.use(routes);
app.use(cors());

app.use((req, res) => {
  try {
    res.status(404).json({ success: false, message: 'invalid routes' });
  } catch (error) {
    res.status(404).json({ message: 'Error:', error });
  }
});

app.listen(PORT, () => {
  DBCONNECT();
  console.log(`http://127.0.0.1:${PORT}`);
});
