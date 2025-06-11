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
    const entryData = req.body;
    entryData.date = new Date(entryData.date);

    const entry = await prisma.moodEntry.create({
      data: entryData,
    });
    return res.status(201).json({
      id: entry.id,
      date: entry.date,
      mood: entry.mood,
      note: entry.note,
      createdAt: entry.createdAt,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
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
        date: updateEntry.date,
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
