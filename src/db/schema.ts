import { serial, primaryKey } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const bids = pgTable("bids", {
  id: serial("id").primaryKey()
});
