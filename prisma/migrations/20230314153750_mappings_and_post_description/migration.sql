/*
  Warnings:

  - You are about to drop the column `publishedAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `urlFriendlyId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `PostTag` table. All the data in the column will be lost.
  - You are about to drop the column `urlFriendlyId` on the `PostTag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url_friendly_id]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url_friendly_id]` on the table `PostTag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_friendly_id` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_friendly_id` to the `PostTag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PostTag" DROP CONSTRAINT "PostTag_postId_fkey";

-- DropIndex
DROP INDEX "Post_urlFriendlyId_key";

-- DropIndex
DROP INDEX "PostTag_urlFriendlyId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "publishedAt",
DROP COLUMN "urlFriendlyId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "published_at" TIMESTAMP(3),
ADD COLUMN     "url_friendly_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PostTag" DROP COLUMN "postId",
DROP COLUMN "urlFriendlyId",
ADD COLUMN     "post_id" INTEGER,
ADD COLUMN     "url_friendly_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_url_friendly_id_key" ON "Post"("url_friendly_id");

-- CreateIndex
CREATE UNIQUE INDEX "PostTag_url_friendly_id_key" ON "PostTag"("url_friendly_id");

-- AddForeignKey
ALTER TABLE "PostTag" ADD CONSTRAINT "PostTag_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
