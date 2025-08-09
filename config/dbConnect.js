const mongoose = require('mongoose');

const DBCONNECT = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(value => {
      console.log('MONGODB IS CONNECT SUCESSFULLY');
    })
    .catch(value => {
      console.log('MONGODB IS NOT CONNECT SORRY !!');
    });
};

module.exports = DBCONNECT;
