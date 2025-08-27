const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Provide a unique Email address"],
    unique: true,
  },
  password: {
    type: String,
  },
  googleId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  if (!this.password && !this.googleId) {
    return next(new Error("User must have either a password or a Google ID"));
  }
  next();
});

module.exports = UserSchema;
