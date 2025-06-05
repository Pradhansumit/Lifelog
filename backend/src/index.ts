import express from "express";

import userRouter from "./routes/user.router";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/users", userRouter);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" }).status(200);
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
