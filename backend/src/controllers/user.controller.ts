import sendEmail from "../utils/sendEmail";
import bcrypt from "bcrypt";
import prisma from "../db/prisma";

const jwt = require("jsonwebtoken");

// ------------ BASIC CRUD ------------

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
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
    const user = await prisma.user.findUnique({ where: { id: userId } });
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }
};

//UPDATE USER DATA
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const user = await prisma.user.update({
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
    const user = await prisma.user.delete({ where: { id: userId } });
    res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ----------- AUTHENTICATION -----------

// USER LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ message: "Email not found." });
    }
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
    res.cookie("jwt_token", token);
    return res.status(200).json({ message: "Login Successful." });
  } catch (error) {
    console.log(error);
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

//REGISTER USER OR USER CREATION
export const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const hash = await bcrypt.hash(userData.password, 10);
    userData.password = hash;

    const user = await prisma.user.create({
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
    return res.status(500).json({ message: "Registration failed." });
  }
};

// GETTING EMAIL ADDRESS AND OTP GENERATION

export const emailForForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findFirst({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ message: "Email not found." });
    }
    const otp = Math.floor(Math.random() * 1000000);
    const otpQuery = await prisma.oTP.create({
      data: { userId: user.id, otp: otp },
    });
    // logic for sending the opt to the email
    const isSent = sendEmail(email, otp);
    if (isSent) {
      return res.status(200).json({ message: "Email has been sent." });
    } else {
      return res.status(500).json({ message: "Email sent failed." });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Issue in getting otp for email address" });
  }
};

const isOTPExpired = (otpTime: Date): boolean => {
  const createdAt = new Date(otpTime);
  const now = new Date();
  const diffInMins = (now.getTime() - createdAt.getTime()) / 1000 / 60;
  return diffInMins > 15; // expiry time should be 15 mins
};

// VALIDATING OTP
export const optVerification = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "Email not found." });
    }
    console.log(user.id);

    const validOTP = await prisma.oTP.findFirst({
      where: { userId: user.id, otp: parseInt(otp) },
    });

    if (!validOTP) {
      return res.status(404).json({ message: "OTP is not valid." });
    }

    const isotpexp = isOTPExpired(validOTP.createdAt);
    if (isotpexp) {
      return res.status(404).json({ message: "OTP has been expired." });
    }

    return res.status(200).json({ message: "Valid OTP." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Issue in getting otp for email address" });
  }
};

// UPDATING THE PASS FOR PARTICULAR USER
export const updateForgetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({ where: { email: email } });
    if (!user) {
      return res.status(404).status({ message: "Email not found." });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashPassword },
    });
    return res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
