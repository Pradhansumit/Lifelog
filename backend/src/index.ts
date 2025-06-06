import express from "express";

import userRouter from "./routes/user.router";
import journalRouter from "./routes/journal.router";

const app = express();
const port = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/entry", journalRouter);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" }).status(200);
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
