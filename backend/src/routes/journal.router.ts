import { Router } from "express";

import {
  getAllEntries,
  getEntryById,
  createEntry,
  deleteEntry,
  updateEntry,
} from "../controllers/journal.controller";

const journalRouter = Router();

journalRouter.get("/", getAllEntries);
journalRouter.get("/entry/:id", getEntryById);
journalRouter.post("/create/", createEntry);
journalRouter.delete("/delete/:id", deleteEntry);
journalRouter.post("/update/:id", updateEntry);

export default journalRouter;
