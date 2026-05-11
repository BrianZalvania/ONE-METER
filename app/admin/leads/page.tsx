"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  RefreshCw,
  ShieldCheck,
  Copy,
  CheckCheck,
} from "lucide-react";

type Lead = {
  id: number;
  email: string;
  amount: number;
  contacted: number;
  created_at: string;
};

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const money = (value: number) =>
    value.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    });

  const getLeads = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/leads", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        return;
      }

      setLeads(data as Lead[]);
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = async (id: number, email: string) => {
    await navigator.clipboard.writeText(email);
    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 1600);
  };

  const toggleContacted = async (id: number, contacted: number) => {
    await fetch("/api/leads", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        contacted: contacted ? 0 : 1,
      }),
    });

    getLeads();
  };

  useEffect(() => {
    getLeads();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#d8ccb6] via-[#c8b894] to-[#b6a17c] px-4 py-6 md:px-6 md:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-[#cbb896] bg-[#efe7db]/86 p-5 shadow-[0_22px_70px_rgba(75,55,25,0.20)] backdrop-blur-xl md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cbb896] bg-[#fff8ec]/80 px-4 py-2 text-xs font-bold text-green-700">
                <ShieldCheck size={15} />
                PANEL ADMIN
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-green-700 md:text-5xl">
                Leads ONE METER
              </h1>

              <p className="mt-2 text-sm text-gray-700 md:text-base">
                Emails registrados, monto elegido, fecha y estado de respuesta.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-[#d8ccb7] bg-[#fff8ec]/80 px-5 py-4 shadow-md">
              <Mail size={24} className="text-green-700" />

              <div>
                <p className="text-xs font-bold text-gray-500">
                  TOTAL LEADS
                </p>

                <p className="text-2xl font-black text-gray-900">
                  {leads.length}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#d8ccb7] bg-[#fff8ec]/70 px-4 py-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <RefreshCw size={15} className="text-green-700" />
              Actualización manual del panel.
            </div>

            <button
              onClick={getLeads}
              disabled={loading}
              className="rounded-xl bg-green-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-green-900/60"
            >
              {loading ? "Actualizando..." : "Actualizar ahora"}
            </button>
          </div>
{/* MOBILE CARDS */}
<div className="mt-6 space-y-4 md:hidden">
  {loading ? (
    <div className="rounded-2xl border border-[#d8ccb7] bg-[#fffaf2]/92 px-4 py-8 text-center text-sm text-gray-500">
      Cargando leads...
    </div>
  ) : leads.length === 0 ? (
    <div className="rounded-2xl border border-[#d8ccb7] bg-[#fffaf2]/92 px-4 py-8 text-center text-sm text-gray-500">
      Todavía no hay emails registrados.
    </div>
  ) : (
    leads.map((lead) => (
      <div
        key={lead.id}
        className={`rounded-3xl border border-[#d8ccb7] bg-[#fffaf2]/95 p-4 shadow-lg ${
          lead.contacted ? "bg-green-50/50" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
              Lead #{lead.id}
            </p>

            <p className="mt-1 break-all text-[15px] font-black text-gray-900">
              {lead.email}
            </p>
          </div>

          <span
            className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-black ${
              lead.contacted
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {lead.contacted ? "Respondido" : "Pendiente"}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl border border-[#eadcc5] bg-white/60 p-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-gray-500">
              Monto
            </p>

            <p className="mt-1 text-sm font-black text-green-700">
              {money(lead.amount)}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase text-gray-500">
              Fecha
            </p>

            <p className="mt-1 text-xs font-semibold leading-snug text-gray-700">
              {new Date(lead.created_at).toLocaleString("es-AR")}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => copyEmail(lead.id, lead.email)}
            className="inline-flex items-center justify-center gap-1 rounded-xl border border-[#dcc9a8] bg-white px-3 py-2.5 text-xs font-bold text-gray-700 transition hover:bg-[#f7efe2]"
          >
            <Copy size={14} />
            {copiedId === lead.id ? "Copiado" : "Copiar"}
          </button>

          <button
            onClick={() =>
              toggleContacted(lead.id, lead.contacted)
            }
            className={`inline-flex items-center justify-center gap-1 rounded-xl px-3 py-2.5 text-xs font-bold text-white transition ${
              lead.contacted
                ? "bg-green-700 hover:bg-green-800"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            <CheckCheck size={14} />
            {lead.contacted ? "Pendiente" : "Respondido"}
          </button>
        </div>
      </div>
    ))
  )}
</div>
          <div className="mt-6 hidden overflow-hidden rounded-2xl border border-[#d8ccb7] bg-[#fffaf2]/92 shadow-lg md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[920px] border-collapse">
                <thead className="bg-[#e4d6bd]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-800">
                      ID
                    </th>

                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-800">
                      Email
                    </th>

                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-800">
                      Monto elegido
                    </th>

                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-800">
                      Fecha
                    </th>

                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-800">
                      Estado
                    </th>

                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-800">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 py-8 text-center text-gray-500"
                      >
                        Cargando leads...
                      </td>
                    </tr>
                  ) : leads.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 py-8 text-center text-gray-500"
                      >
                        Todavía no hay emails registrados.
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr
                        key={lead.id}
                        className={`border-t border-[#eadcc5] transition hover:bg-[#fff8ec] ${
                          lead.contacted ? "bg-green-50/40" : ""
                        }`}
                      >
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {lead.id}
                        </td>

                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                          {lead.email}
                        </td>

                        <td className="px-4 py-3 text-sm font-bold text-green-700">
                          {money(lead.amount)}
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-700">
                          {new Date(lead.created_at).toLocaleString("es-AR")}
                        </td>

                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                              lead.contacted
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {lead.contacted ? "Respondido" : "Pendiente"}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => copyEmail(lead.id, lead.email)}
                              className="inline-flex items-center gap-1 rounded-lg border border-[#dcc9a8] bg-white px-3 py-1.5 text-xs font-bold text-gray-700 transition hover:bg-[#f7efe2]"
                            >
                              <Copy size={14} />
                              {copiedId === lead.id ? "Copiado" : "Copiar"}
                            </button>

                            <button
                              onClick={() =>
                                toggleContacted(
                                  lead.id,
                                  lead.contacted
                                )
                              }
                              className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${
                                lead.contacted
                                  ? "bg-green-700 hover:bg-green-800"
                                  : "bg-yellow-500 hover:bg-yellow-600"
                              }`}
                            >
                              <CheckCheck size={14} />
                              {lead.contacted
                                ? "Marcar pendiente"
                                : "Marcar respondido"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}