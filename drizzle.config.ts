import type { Config } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";
import { cwd } from "node:process";

loadEnvConfig(cwd());

export default {
  schema: "./app/_lib/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    ssl: true,
    connectionString: process.env.POSTGRES_URL!,
  },
} satisfies Config;
