import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

function db(): SupabaseClient {
  if (!_client) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key)
      throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required");
    _client = createClient(url, key);
  }
  return _client;
}

export type Devis = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: "pending" | "done";
};

export async function getAll(): Promise<Devis[]> {
  const { data, error } = await db()
    .from("devis")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Devis[];
}

export async function append(
  data: Omit<Devis, "id" | "date" | "status">
): Promise<Devis> {
  const date = new Date().toLocaleString("fr-FR");
  const { data: inserted, error } = await db()
    .from("devis")
    .insert([{ ...data, date, status: "pending" }])
    .select()
    .single();
  if (error) throw error;
  return inserted as Devis;
}

export async function toggleStatus(id: string): Promise<void> {
  const { data, error: fetchError } = await db()
    .from("devis")
    .select("status")
    .eq("id", id)
    .single();
  if (fetchError) throw fetchError;

  const { error } = await db()
    .from("devis")
    .update({ status: data.status === "done" ? "pending" : "done" })
    .eq("id", id);
  if (error) throw error;
}

export async function removeById(id: string): Promise<void> {
  const { error } = await db().from("devis").delete().eq("id", id);
  if (error) throw error;
}
