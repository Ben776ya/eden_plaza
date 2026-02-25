import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

function db(): SupabaseClient {
  if (!_client) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required");
    _client = createClient(url, key);
  }
  return _client;
}

export type DevisRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: string;
};

export async function getAllDevis(): Promise<DevisRow[]> {
  const { data, error } = await db()
    .from("devis")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;
  return (data ?? []) as DevisRow[];
}

export async function appendDevis(
  data: Pick<DevisRow, "name" | "email" | "phone" | "service" | "message">
): Promise<string> {
  const date = new Date().toLocaleString("fr-FR");

  const { data: inserted, error } = await db()
    .from("devis")
    .insert([{ ...data, date, status: "pending" }])
    .select("id")
    .single();

  if (error) throw error;
  return String(inserted?.id ?? "");
}

export async function toggleDevisStatus(id: string): Promise<void> {
  const { data, error: fetchError } = await db()
    .from("devis")
    .select("status")
    .eq("id", id)
    .single();

  if (fetchError) throw fetchError;

  const newStatus = data.status === "done" ? "pending" : "done";

  const { error } = await db()
    .from("devis")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) throw error;
}

export async function deleteDevisById(id: string): Promise<void> {
  const { error } = await db().from("devis").delete().eq("id", id);
  if (error) throw error;
}

export async function getAdminHash(email: string): Promise<string | null> {
  const { data, error } = await db()
    .from("admins")
    .select("hashed_password")
    .eq("email", email)
    .single();

  if (error || !data) return null;
  return data.hashed_password as string;
}
