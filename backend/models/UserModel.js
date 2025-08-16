const { model } = require("mongoose");
const UserSchema = require("../Schemas/UserSchema");



const UserModel = new model("model", UserSchema);
module.exports = UserModel;
