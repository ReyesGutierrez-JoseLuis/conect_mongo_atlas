const mongoose = require("mongoose");

const URI ="mongodb+srv://m001-student:m001-student@sandbox.4hc82.mongodb.net/utd?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log();
};

module.exports = connectDB;
