-- CreateTable
CREATE TABLE "PostTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "postId" INTEGER,

    CONSTRAINT "PostTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostTag" ADD CONSTRAINT "PostTag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
