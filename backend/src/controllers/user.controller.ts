import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";

const jwt = require("jsonwebtoken");

const userClient = new PrismaClient().user;

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userClient.findMany();
    return res.status(200).json({ data: allUsers });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// GET USER BY ID
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userClient.findUnique({ where: { id: userId } });
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }
};

//REGISTER USER OR USER CREATION
export const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const hash = await bcrypt.hash(userData.password, 10);
    userData.password = hash;

    const user = await userClient.create({
      data: userData,
    });

    return res.status(201).json({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Registration failed." });
  }
};

// USER LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userClient.findFirst({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ message: "Email not found." });
    }
    console.log(password);
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid!) {
      return res.status(404).json({ message: "Password is not correct." });
    }
    const secret_key = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
      },
      secret_key,
    );
    console.log(token);
    res.cookie("jwt_token", token);
    return res.status(200).json({ message: "Login Successful." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//UPDATE USER DATA
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const user = await userClient.update({
      where: { id: userId },
      data: userData,
    });
    return res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// DELETING ACCOUNT OR USER
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userClient.delete({ where: { id: userId } });
    res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// USER LOGOUT
export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt_token");
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
