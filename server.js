const express = require("express");
const connectDB = require("./DB/Conncection");
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use("/api/userModel", require("./Api/User"));
const Port = process.env.Port;

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started at port ${Port}`);
});
