import { z } from "zod";

/**
 * Environment schema
 * Only variables defined here are allowed.
 */
const envSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("Frontend App"),
  NEXT_PUBLIC_APP_VERSION: z.string().default("1.0.0"),
  NEXT_PUBLIC_APP_HOST: z.string().default("localhost"),

  NODE_ENV: z.enum(["development", "production", "test"]),

  APP_PORT: z
    .string()
    .default("3000")
    .transform((val) => {
      const port = Number(val);

      if (Number.isNaN(port)) {
        throw new Error("APP_PORT must be a valid number");
      }

      return port;
    }),
});

/**
 * Validate environment variables
 */
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:");

  parsedEnv.error.issues.forEach((issue) => {
    console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  });

  throw new Error("Environment validation failed");
}

/**
 * Export immutable config
 */
export const envAppConfig = Object.freeze({
  APP_NAME: parsedEnv.data.NEXT_PUBLIC_APP_NAME,
  APP_VERSION: parsedEnv.data.NEXT_PUBLIC_APP_VERSION,
  APP_HOST: parsedEnv.data.NEXT_PUBLIC_APP_HOST,
  NODE_ENV: parsedEnv.data.NODE_ENV,
  APP_PORT: parsedEnv.data.APP_PORT,
});

/**
 * Type-safe environment type
 */
export type envAppConfig = typeof envAppConfig;
