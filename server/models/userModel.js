import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  if (!email || !password) {
    throw Error("Email and password are required");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email address");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is too weak");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields are required");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("Incorrect email or password");
  }

  return user;
};

export const User = mongoose.model("User", userSchema);