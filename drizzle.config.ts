import type { Config } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";
import { cwd } from "node:process";

loadEnvConfig(cwd());

let connectionString = process.env.POSTGRES_URL!;

if (process.env.NODE_ENV === "production") {
  connectionString += "?sslmode=require";
}

export default {
  schema: "./app/_lib/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    ssl: true,
    connectionString,
  },
} satisfies Config;
