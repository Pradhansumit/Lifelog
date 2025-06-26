import sendEmail from "../utils/sendEmail";
import prisma from "../db/prisma";
import cron from "node-cron";

async function reminderForJournalEntry() {
  // Today's date range
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  // Users who have created entries today
  const usersWithEntriesToday = await prisma.moodEntry.findMany({
    where: {
      createdAt: {
        gte: startOfToday,
        lte: endOfToday,
      },
    },
    select: {
      userId: true,
    },
    distinct: ["userId"],
  });
  const userIdsWithEntriesToday = usersWithEntriesToday.map(
    (entry) => entry.userId,
  );

  const usersWithoutEntryToday = await prisma.user.findMany({
    where: {
      id: {
        notIn: userIdsWithEntriesToday,
      },
    },
  });
  const userEmailsWithoutEntryToday = usersWithoutEntryToday.map(
    (entry) => entry.email,
  );

  const subject = "Quick! Tell LifeLog how you really feel 😀";
  const body = `Hey! 👋

  Just a friendly nudge from your favorite digital diary... 👀  
  We noticed you haven’t logged your mood today, and frankly—your feelings are starting to feel a little ghosted. 👻

  Whether you're feeling:
  😄 Joyfully unstoppable  
  😴 Sleepy and mildly confused  
  😤 Ready to scream into a pillow  
  🥦 Just… like a vegetable  

  …we're all ears (and pixels). 🎧

  ✨ Log your mood in LifeLog and keep your emotional streak alive!  
  Your future self will thank you for it—or at least be slightly amused.

  Stay expressive,  
  The LifeLog Team ❤️

  P.S. The mood-iverse misses you.
  `;
  const isSent = sendEmail(userEmailsWithoutEntryToday, subject, body);
  if (isSent) {
    console.log(new Date().toLocaleString("IN"), "Email has been sent.");
  } else {
    console.log(new Date().toLocaleString("IN"), "Email sent failed.");
  }
}

reminderForJournalEntry().catch((e) => {
  console.log(e);
  process.exit(1);
});

cron.schedule("0 20 * * *", reminderForJournalEntry); // every day at 8:00 PM
