const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Provide a unique Email address"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = UserSchema;
