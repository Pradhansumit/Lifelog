import { Router } from "express";

import {
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
  registerUser,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getAllUsers); // for getting all the users
userRouter.get("/:id", getUserById); // for getting specific user
userRouter.post("/", registerUser); // for registring users
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
