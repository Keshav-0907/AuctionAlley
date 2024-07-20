import { defineConfig } from "drizzle-kit";
import { env } from "@/db/env";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
