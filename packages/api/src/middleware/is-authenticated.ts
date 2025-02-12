import { jwt } from "hono/jwt";

export const isAuthenticated = jwt({ secret: process.env.AUTH_SECRET! });
