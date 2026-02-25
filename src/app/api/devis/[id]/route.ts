import { NextResponse } from "next/server";
import { toggleDevisStatus, deleteDevisById } from "@/lib/supabase";

export async function PATCH(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await toggleDevisStatus(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[PATCH /api/devis/[id]]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await deleteDevisById(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DELETE /api/devis/[id]]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
