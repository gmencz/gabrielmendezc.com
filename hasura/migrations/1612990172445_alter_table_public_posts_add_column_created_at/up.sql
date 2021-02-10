ALTER TABLE "public"."posts" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();
