/*
  Warnings:

  - A unique constraint covering the columns `[urlFriendlyId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `urlFriendlyId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "urlFriendlyId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_urlFriendlyId_key" ON "Post"("urlFriendlyId");
