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
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", requireAuth, getAllUsers);
userRouter.get("/user/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

// endpoints for user creation and authentication
userRouter.post("/register/", registerUser);
userRouter.post("/login/", loginUser);
userRouter.get("/logout/", logout);

export default userRouter;
