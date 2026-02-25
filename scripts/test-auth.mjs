import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import { readFileSync } from "fs";

// Read .env.local manually
const env = Object.fromEntries(
  readFileSync(".env.local", "utf-8")
    .split("\n")
    .filter((l) => l.includes("="))
    .map((l) => [l.split("=")[0].trim(), l.split("=").slice(1).join("=").trim()])
);

const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

console.log("Checking admins table...");
const { data, error } = await supabase.from("admins").select("email, hashed_password");

if (error) {
  console.error("Supabase error:", error.message, "| code:", error.code);
  process.exit(1);
}

if (!data || data.length === 0) {
  console.log("PROBLEM: admins table is EMPTY. Run the INSERT SQL in Supabase.");
  process.exit(1);
}

console.log(`Found ${data.length} admin row(s):`);
for (const row of data) {
  const password = "#ANNPQMW-anpqmw01";
  const match = await bcrypt.compare(password, row.hashed_password);
  console.log(` email: ${row.email}`);
  console.log(` hash:  ${row.hashed_password.slice(0, 25)}...`);
  console.log(` password match: ${match ? "YES ✓" : "NO ✗ — hash is outdated, run the UPDATE SQL"}`);
}
