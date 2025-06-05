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

userRouter.get("/", requireAuth, getAllUsers); // for getting all the users
userRouter.get("/user/:id", getUserById); // for getting specific user
userRouter.post("/register/", registerUser); // for registring users
userRouter.post("/login/", loginUser); // for logging in the user and receiving jwt token
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/logout/", logout);

export default userRouter;
