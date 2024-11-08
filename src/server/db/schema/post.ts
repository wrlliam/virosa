import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const postTable = pgTable(`post_table`, {
  id: serial(),
  text: text("content"),
});
