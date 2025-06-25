import { Router } from "express";

import {
  getAllEntries,
  getAllUserEntries,
  getEntryById,
  createEntry,
  deleteEntry,
  updateEntry,
  getUserEntriesByDate,
} from "../controllers/journal.controller";
import requireAuth from "../middleware/authMiddleware";

const journalRouter = Router();

//main routing is /api/entry/<create|delete/:id|update/:id>

//get all entries
journalRouter.get("/", requireAuth, getAllEntries);
//get all user based entries
journalRouter.post("/getuserentries", requireAuth, getAllUserEntries);
// get user entries based on dates
journalRouter.post("/getuserentriesbydate", requireAuth, getUserEntriesByDate);
//get specific entry
journalRouter.get("/entry/:id", requireAuth, getEntryById);
//create entry
journalRouter.post("/create/", createEntry);
//delete entry
journalRouter.delete("/delete/:id", requireAuth, deleteEntry);
//update entry
journalRouter.post("/update/:id", requireAuth, updateEntry);

export default journalRouter;
