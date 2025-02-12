import { Hono } from "hono";
import { usersRouter } from "./routes/users";

const app = new Hono();

app.route("/users", usersRouter);

export default {
  port: Number.parseInt(process.env.PORT!) || 3000,
  fetch: app.fetch,
};
