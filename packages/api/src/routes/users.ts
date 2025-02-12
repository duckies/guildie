import { Hono } from "hono";
import { env } from "hono/adapter";

export const usersRouter = new Hono()
  .get("/", (c) => c.json({ message: "List users", env: env(c) }))
  .post("/", (c) => c.json({ message: "Create user" }));
