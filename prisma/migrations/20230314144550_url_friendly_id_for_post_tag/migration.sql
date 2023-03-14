/*
  Warnings:

  - A unique constraint covering the columns `[urlFriendlyId]` on the table `PostTag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `urlFriendlyId` to the `PostTag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostTag" ADD COLUMN     "urlFriendlyId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PostTag_urlFriendlyId_key" ON "PostTag"("urlFriendlyId");
