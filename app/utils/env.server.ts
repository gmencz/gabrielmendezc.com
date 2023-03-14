import { z } from "zod";

const envSchema = z.object({
  SESSION_SECRET: z.string(),
  NODE_ENV: z.enum(["production", "development", "test"]),
});

const env = envSchema.parse(process.env);

export { env };
