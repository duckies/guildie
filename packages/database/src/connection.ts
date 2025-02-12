import { env } from "bun";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const database = drizzle(pool, {
  schema,
  casing: "snake_case",
  logger: true,
});
