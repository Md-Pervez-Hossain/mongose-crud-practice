const { default: mongoose } = require("mongoose");

const user = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const userModel = mongoose.model("user", user);
module.exports = userModel;
