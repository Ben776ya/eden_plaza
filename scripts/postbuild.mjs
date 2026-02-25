/**
 * Copies static assets into the standalone bundle for self-hosted deployments.
 * Skipped automatically on Vercel (which handles assets itself).
 */
import { cpSync, existsSync } from "fs";

if (process.env.VERCEL) {
  console.log("Vercel deployment detected — skipping standalone copy.");
} else if (!existsSync(".next/standalone")) {
  console.log("No standalone directory found — skipping copy.");
} else {
  cpSync(".next/static", ".next/standalone/.next/static", { recursive: true });
  cpSync("public", ".next/standalone/public", { recursive: true });
  console.log("Standalone static files copied successfully.");
}
