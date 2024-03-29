import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  let users;

  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "no users found" });
  } else {
    return res.status(200).json({ users });
  }
};

export const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists. Login Instead" });
  }
  const hashpass = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashpass,
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    res.status(404).json({ message: "user not found" });
  }
  const isPassCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPassCorrect) {
    res.status(400).json({ message: "invalid password" });
  }
  return res.status(200).json({ message:"login successful" });
};
