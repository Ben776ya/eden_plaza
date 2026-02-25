/**
 * One-time script to generate a bcrypt hash for the admin password.
 * Usage: node scripts/hash-password.mjs <your-password>
 * Then paste the output into the admins sheet (column B).
 */
import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.error("Usage: node scripts/hash-password.mjs <your-password>");
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);
console.log("\nBcrypt hash (paste this into the admins sheet, column B):\n");
console.log(hash);
console.log();
