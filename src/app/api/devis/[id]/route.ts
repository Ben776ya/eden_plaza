import { NextResponse } from "next/server";
import { toggleStatus, removeById } from "@/lib/supabase";

export async function PATCH(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await toggleStatus(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[PATCH /api/devis/[id]]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await removeById(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DELETE /api/devis/[id]]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
