/*
  Warnings:

  - You are about to drop the column `date` on the `MoodEntry` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `MoodEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "MoodEntry_userId_date_key";

-- AlterTable
ALTER TABLE "MoodEntry" DROP COLUMN "date";

-- CreateIndex
CREATE UNIQUE INDEX "MoodEntry_userId_key" ON "MoodEntry"("userId");
