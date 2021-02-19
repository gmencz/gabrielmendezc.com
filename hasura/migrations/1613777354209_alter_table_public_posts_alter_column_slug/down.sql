ALTER TABLE ONLY "public"."posts" ALTER COLUMN "slug" SET DEFAULT gen_random_uuid();
