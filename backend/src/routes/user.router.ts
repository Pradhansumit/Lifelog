import { Router } from "express";
import requireAuth from "../middleware/authMiddleware";

import {
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
  registerUser,
  loginUser,
  logout,
  emailForForgetPassword,
  optVerification,
  updateForgetPassword,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", requireAuth, getAllUsers);
userRouter.get("/user/:id", requireAuth, getUserById);
userRouter.put("/:id", requireAuth, updateUser);
userRouter.delete("/:id", requireAuth, deleteUser);

// endpoints for user creation and authentication
userRouter.post("/register/", registerUser);
userRouter.post("/login/", loginUser);
userRouter.get("/logout/", logout);
userRouter.post("/forget-password", emailForForgetPassword);
userRouter.post("/verify-otp", optVerification);
userRouter.post("/update-password", updateForgetPassword);

export default userRouter;
