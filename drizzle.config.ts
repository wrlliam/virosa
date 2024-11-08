import { env } from "bun";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/server/db/schema/",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL as string,
  },
});
