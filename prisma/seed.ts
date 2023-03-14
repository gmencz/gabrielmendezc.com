import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();
  await prisma.post.deleteMany();
  await prisma.postTag.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        name: "Yours",
        markdown: `Macro-tracker that adapts to your metabolism`,
        logo: "/yours.png",
      },
      {
        name: "OneClip",
        markdown: `Share your clipboard with people nearby.`,
        logo: "/oneclip.png",
      },
    ],
  });

  await prisma.postTag.createMany({
    data: [
      { name: "Bodybuilding", urlFriendlyId: "bodybuilding" },
      { name: "Coding", urlFriendlyId: "coding" },
    ],
  });

  await prisma.post.create({
    data: {
      title: "Bodybuilding post 1",
      markdown: `This is the body of bodybuilding post number 1`,
      description: "Description about bodybuilding post 1",
      published: true,
      publishedAt: new Date(),
      urlFriendlyId: "bodybuilding-post-1",
      tags: {
        connect: {
          urlFriendlyId: "bodybuilding",
        },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Coding post 1",
      markdown: `This is the body of coding post number 1`,
      description: "Description about coding post 1",
      published: true,
      publishedAt: new Date(),
      urlFriendlyId: "coding-post-1",
      tags: {
        connect: {
          urlFriendlyId: "coding",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
