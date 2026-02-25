import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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
  const { data, error } = await supabase
    .from("devis")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;
  return (data ?? []) as DevisRow[];
}

export async function appendDevis(
  data: Pick<DevisRow, "name" | "email" | "phone" | "service" | "message">
): Promise<string> {
  const id = Date.now().toString();
  const date = new Date().toLocaleString("fr-FR");

  const { error } = await supabase
    .from("devis")
    .insert([{ id, ...data, date, status: "pending" }]);

  if (error) throw error;
  return id;
}

export async function toggleDevisStatus(id: string): Promise<void> {
  const { data, error: fetchError } = await supabase
    .from("devis")
    .select("status")
    .eq("id", id)
    .single();

  if (fetchError) throw fetchError;

  const newStatus = data.status === "done" ? "pending" : "done";

  const { error } = await supabase
    .from("devis")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) throw error;
}

export async function deleteDevisById(id: string): Promise<void> {
  const { error } = await supabase.from("devis").delete().eq("id", id);
  if (error) throw error;
}

export async function getAdminHash(email: string): Promise<string | null> {
  const { data, error } = await supabase
    .from("admins")
    .select("hashed_password")
    .eq("email", email)
    .single();

  if (error || !data) return null;
  return data.hashed_password as string;
}
