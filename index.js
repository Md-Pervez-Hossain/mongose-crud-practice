const express = require("express");
const mongoose = require("mongoose");
const User = require("./Router/User");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const mongoDBURL =
  "mongodb+srv://mongoose-learn:QDNdCTvfvzo3QosN@cluster0.zr5yxev.mongodb.net/mongoseLearn?retryWrites=true&w=majority";
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("mongoose Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
app.use("/users", User);
app.get("/", (req, res) => {
  res.send("Server running ");
});
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
