import { customType, pgTable as table, timestamp } from "drizzle-orm/pg-core";

const bigintString = customType<{ data: string; driverData: bigint }>({
  dataType() {
    return "bigint";
  },
  fromDriver(value: bigint): string {
    return value.toString();
  },
});

export const users = table("users", {
  id: bigintString().primaryKey(),
  updatedAt: timestamp({ mode: "date", precision: 0 }).$onUpdateFn(() =>
    new Date()
  ),
});

export type User = typeof users.$inferSelect;
