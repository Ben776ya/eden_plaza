"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Circle,
  Trash2,
  RefreshCw,
  LogOut,
  Loader2,
  ClipboardList,
} from "lucide-react";

type Devis = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: string;
};

type Filter = "all" | "pending" | "done";

export default function AdminPage() {
  const [devis, setDevis] = useState<Devis[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");
  const [actionId, setActionId] = useState<string | null>(null);

  const fetchDevis = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/devis");
      const data = await res.json();
      setDevis([...data].reverse());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDevis();
  }, [fetchDevis]);

  const toggleDone = async (id: string) => {
    setActionId(id);
    await fetch(`/api/devis/${id}`, { method: "PATCH" });
    await fetchDevis();
    setActionId(null);
  };

  const deleteDevis = async (id: string) => {
    if (!confirm("Supprimer cette demande définitivement ?")) return;
    setActionId(id);
    await fetch(`/api/devis/${id}`, { method: "DELETE" });
    await fetchDevis();
    setActionId(null);
  };

  const logout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    window.location.href = "/admin/login";
  };

  const filtered = devis.filter((d) =>
    filter === "all" ? true : d.status === filter
  );

  const pendingCount = devis.filter((d) => d.status === "pending").length;
  const doneCount = devis.filter((d) => d.status === "done").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Eden Plaza" width={110} height={46} />
            <div className="hidden sm:block h-6 w-px bg-gray-200" />
            <span className="hidden sm:block text-sm font-semibold text-gray-600">
              Demandes de devis
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchDevis}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Actualiser</span>
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total", value: devis.length, color: "text-gray-800", bg: "bg-white" },
            { label: "En attente", value: pendingCount, color: "text-orange-600", bg: "bg-orange-50" },
            { label: "Terminés", value: doneCount, color: "text-green-600", bg: "bg-green-50" },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} rounded-xl border border-gray-100 p-4 text-center shadow-sm`}>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          {(["all", "pending", "done"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {f === "all" ? "Tous" : f === "pending" ? "En attente" : "Terminés"}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center gap-2 py-20 text-gray-400">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Chargement...</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <ClipboardList className="w-10 h-10 mb-3 opacity-40" />
              <p className="text-sm">Aucune demande trouvée</p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      {["Date", "Nom", "Email", "Téléphone", "Service", "Message", "Statut", "Actions"].map((h) => (
                        <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filtered.map((d) => (
                      <tr key={d.id} className={`hover:bg-gray-50 transition-colors ${d.status === "done" ? "opacity-60" : ""}`}>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">{d.date}</td>
                        <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{d.name}</td>
                        <td className="px-4 py-3 text-gray-600">{d.email}</td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{d.phone || "—"}</td>
                        <td className="px-4 py-3">
                          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {d.service || "—"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 max-w-xs">
                          <span className="block truncate" title={d.message}>{d.message}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                            d.status === "done"
                              ? "bg-green-50 text-green-700"
                              : "bg-orange-50 text-orange-700"
                          }`}>
                            {d.status === "done" ? "Terminé" : "En attente"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => toggleDone(d.id)}
                              disabled={actionId === d.id}
                              title={d.status === "done" ? "Marquer en attente" : "Marquer terminé"}
                              className={`p-1.5 rounded-lg transition-colors ${
                                d.status === "done"
                                  ? "text-green-600 hover:bg-green-50"
                                  : "text-gray-400 hover:text-green-600 hover:bg-green-50"
                              } disabled:opacity-40`}
                            >
                              {actionId === d.id ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : d.status === "done" ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                <Circle className="w-4 h-4" />
                              )}
                            </button>
                            <button
                              onClick={() => deleteDevis(d.id)}
                              disabled={actionId === d.id}
                              title="Supprimer"
                              className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-40"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden divide-y divide-gray-100">
                {filtered.map((d) => (
                  <div key={d.id} className={`p-4 ${d.status === "done" ? "opacity-60" : ""}`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-semibold text-gray-800">{d.name}</p>
                        <p className="text-xs text-gray-500">{d.date}</p>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                        d.status === "done"
                          ? "bg-green-50 text-green-700"
                          : "bg-orange-50 text-orange-700"
                      }`}>
                        {d.status === "done" ? "Terminé" : "En attente"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{d.email}</p>
                    {d.phone && <p className="text-sm text-gray-600">{d.phone}</p>}
                    <span className="inline-block mt-1 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
                      {d.service || "—"}
                    </span>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{d.message}</p>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => toggleDone(d.id)}
                        disabled={actionId === d.id}
                        className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium py-2 rounded-lg border border-green-200 text-green-700 hover:bg-green-50 transition-colors disabled:opacity-40"
                      >
                        {d.status === "done" ? <Circle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                        {d.status === "done" ? "Réouvrir" : "Terminer"}
                      </button>
                      <button
                        onClick={() => deleteDevis(d.id)}
                        disabled={actionId === d.id}
                        className="flex items-center justify-center gap-1.5 text-sm font-medium py-2 px-4 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-40"
                      >
                        <Trash2 className="w-4 h-4" />
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
