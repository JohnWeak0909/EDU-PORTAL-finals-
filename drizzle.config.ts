import { defineConfig } from "drizzle-kit";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is required to run drizzle commands");
}

// Determine if using SQLite or MySQL
const isSqlite = connectionString.startsWith("file:");

const config = isSqlite
  ? {
      schema: "./drizzle/schema.ts",
      out: "./drizzle",
      dialect: "sqlite" as const,
      dbCredentials: {
        url: connectionString,
      },
    }
  : {
      schema: "./drizzle/schema.ts",
      out: "./drizzle",
      dialect: "mysql" as const,
      dbCredentials: {
        url: connectionString,
      },
    };

export default defineConfig(config);
