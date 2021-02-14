ALTER TABLE "public"."posts" ADD COLUMN "slug" Text NOT NULL DEFAULT gen_random_uuid();
