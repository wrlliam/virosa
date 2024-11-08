import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "process";

export const db = drizzle(env.DATABASE_URL as string);
