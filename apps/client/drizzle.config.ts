import { type Config } from "drizzle-kit";

import { env } from "@taxpro/env";

export default {
  schema: "../../packages/db/src/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["client_*"],
} satisfies Config;
