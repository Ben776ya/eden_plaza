"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Circle,
  Trash2,
  LogOut,
  RefreshCw,
  Clock,
  Phone,
  Mail,
  Wrench,
} from "lucide-react";

type Devis = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: "pending" | "done";
};

export default function AdminPage() {
  const router = useRouter();
  const [list, setList] = useState<Devis[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDevis = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/devis");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    if (res.ok) setList(await res.json());
    setLoading(false);
  }, [router]);

  useEffect(() => {
    fetchDevis();
  }, [fetchDevis]);

  const handleToggle = async (id: string) => {
    await fetch(`/api/devis/${id}`, { method: "PATCH" });
    setList((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: d.status === "done" ? "pending" : "done" } : d
      )
    );
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer ce devis ?")) return;
    await fetch(`/api/devis/${id}`, { method: "DELETE" });
    setList((prev) => prev.filter((d) => d.id !== id));
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  const pending = list.filter((d) => d.status === "pending").length;
  const done = list.filter((d) => d.status === "done").length;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold" style={{ color: "var(--color-text-primary)" }}>
            Eden Plaza — Dashboard
          </h1>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
            Gestion des demandes de devis
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchDevis}
            className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <RefreshCw className="w-4 h-4" />
            Actualiser
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
              {list.length}
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
              Total
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold text-amber-500">{pending}</p>
            <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
              En attente
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold text-emerald-500">{done}</p>
            <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
              Traités
            </p>
          </div>
        </div>

        {/* Devis list */}
        {loading ? (
          <div className="flex justify-center py-20">
            <RefreshCw className="w-6 h-6 animate-spin" style={{ color: "var(--color-primary)" }} />
          </div>
        ) : list.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <p className="text-lg font-medium" style={{ color: "var(--color-text-secondary)" }}>
              Aucune demande pour le moment
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {list.map((d) => (
              <div
                key={d.id}
                className={`bg-white rounded-2xl border p-5 transition-all ${
                  d.status === "done"
                    ? "border-emerald-200 opacity-70"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Toggle button */}
                  <button
                    onClick={() => handleToggle(d.id)}
                    title={d.status === "done" ? "Marquer en attente" : "Marquer comme traité"}
                    className="mt-0.5 shrink-0 transition-transform hover:scale-110"
                  >
                    {d.status === "done" ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300 hover:text-emerald-400" />
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-base font-semibold ${
                            d.status === "done" ? "line-through text-gray-400" : ""
                          }`}
                          style={d.status !== "done" ? { color: "var(--color-text-primary)" } : {}}
                        >
                          {d.name}
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            d.status === "done"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {d.status === "done" ? "Traité" : "En attente"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                        <Clock className="w-3.5 h-3.5" />
                        {d.date}
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                      {d.email && (
                        <span className="flex items-center gap-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                          <Mail className="w-3.5 h-3.5" />
                          {d.email}
                        </span>
                      )}
                      {d.phone && (
                        <span className="flex items-center gap-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                          <Phone className="w-3.5 h-3.5" />
                          {d.phone}
                        </span>
                      )}
                      {d.service && (
                        <span className="flex items-center gap-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                          <Wrench className="w-3.5 h-3.5" />
                          {d.service}
                        </span>
                      )}
                    </div>

                    {d.message && (
                      <p
                        className="mt-2 text-sm leading-relaxed line-clamp-2"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {d.message}
                      </p>
                    )}
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(d.id)}
                    title="Supprimer"
                    className="shrink-0 p-2 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
