import prisma from "../db/prisma";

// GET ALL MOOD ENTRIES
export const getAllEntries = async (req, res) => {
  try {
    const allEntries = await prisma.moodEntry.findMany();
    return res.status(200).json({ data: allEntries });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// GET ALL MOOD ENTRIES FOR PARTICULAR USERS
export const getAllUserEntries = async (req, res) => {
  try {
    const { user: userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }

    const entries = await prisma.moodEntry.findMany({
      where: {
        userId: user.id,
      },
    });
    return res.status(200).json({ data: entries });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// GET ONE MOOD ENTRY
export const getEntryById = async (req, res) => {
  try {
    const entryId = parseInt(req.params.id);
    const entry = await prisma.moodEntry.findUnique({ where: { id: entryId } });
    if (entry) {
      return res.status(200).json({ data: entry });
    } else {
      return res.status(404).json({ message: "Entry not found." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ADD/CREATE MOOD ENTRY
export const createEntry = async (req, res) => {
  try {
    const { user: userEmail, mood, note } = req.body;

    if (!userEmail || !mood) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const entryExist = await prisma.moodEntry.findFirst({
      where: {
        userId: user.id,
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    if (entryExist) {
      return res
        .status(403)
        .json({ message: "You have already did your blog entry." });
    }

    const entry = await prisma.moodEntry.create({
      data: {
        userId: user.id,
        mood,
        note,
      },
    });

    return res.status(201).json({
      id: entry.id,
      mood: entry.mood,
      note: entry.note,
      createdAt: entry.createdAt,
    });
  } catch (error: any) {
    console.error("❌ Error while creating mood entry:");
    console.dir(error, { depth: null });

    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message || "Unknown error",
    });
  }
};

// UPDATE MOOD ENTRY FROM ID
export const updateEntry = async (req, res) => {
  try {
    const entryId = parseInt(req.params.id);
    const entry = await prisma.moodEntry.findFirst({ where: { id: entryId } });
    if (!entry) {
      return res.status(404).json({ message: "Entry not found." });
    }
    const updateEntry = await prisma.moodEntry.update({
      where: { id: entryId },
      data: req.body,
    });
    return res.status(200).json({
      data: {
        id: updateEntry.id,
        mood: updateEntry.mood,
        note: updateEntry.note,
        createdAt: updateEntry.createdAt,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE ENTRY
export const deleteEntry = async (req, res) => {
  try {
    const entryId = parseInt(req.params.id);
    const entry = await prisma.moodEntry.delete({ where: { id: entryId } });
    return res.status(200).json({ data: entry });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
