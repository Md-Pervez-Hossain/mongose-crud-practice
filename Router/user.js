const express = require("express");
const User = express.Router();
const userInfo = require("../Schema/userSchama");
User.get("/user", (req, res) => {
  console.log("user rouer working");
});
User.post("/addUser", (req, res) => {
  const newUser = new userInfo(req.body);
  newUser
    .save()
    .then((users) => {
      res.status(200).json({ message: "User SuccessFully Added", users });
    })
    .catch((error) => {
      console.log(error.message);
    });
});
User.get("/getUsers", (req, res) => {
  userInfo.find().then((users) => {
    res.send(users);
  });
});
User.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userInfo.findOne({ _id: id }).then((user) => {
    res.send(user);
  });
});
User.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  userInfo.findByIdAndDelete(id).then((user) => {
    res.json({ message: "SuccessFully Deleted", user });
  });
});

User.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  const updatedEmail = req.body.email; // New email value
  const updatedName = req.body.name; // New email value
  userInfo
    .findByIdAndUpdate(
      id,
      { email: updatedEmail, name: updatedName },
      { new: true }
    )
    .then((updatedUser) => {
      res.json({ message: "Successfully Updated", updatedUser });
    })
    .catch((error) => {
      console.log(error.message);
    });
});

module.exports = User;
