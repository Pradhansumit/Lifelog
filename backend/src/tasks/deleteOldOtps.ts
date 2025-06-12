import prisma from "../db/prisma";
import cron from "node-cron";

async function deleteExpiredOtps() {
  const twoHourAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);

  const deleted = await prisma.oTP.deleteMany({
    where: {
      createdAt: {
        lt: twoHourAgo,
      },
    },
  });

  console.log(`Deleted ${deleted.count} expired OTPs.`);
  await prisma.$disconnect();
}

deleteExpiredOtps().catch((e) => {
  console.log(e);
  process.exit(1);
});

cron.schedule("*/10 * * * *", deleteExpiredOtps); // every 10 mins
