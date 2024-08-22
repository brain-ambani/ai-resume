/*
  Warnings:

  - You are about to drop the column `Summary` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `contact` on the `Resume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "Summary",
DROP COLUMN "contact",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "username" TEXT;
