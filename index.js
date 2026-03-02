require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
const authRoutes = require('./routes/authRoutes');
const DBCONNECT = require('./config/dbConnect');
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRoutes);



app.listen(PORT, () => {
  DBCONNECT();
  console.log(`http://127.0.0.1:${PORT}`);
});
