"use client";

import { useState, useEffect } from "react";
import { Save, Lock, TrendingUp, Clock, CheckCircle, AlertCircle, Download, LogOut } from "lucide-react";

const RATE_META: Record<string, { name: string; flag: string }> = {
  USD: { name: "US Dollar",         flag: "🇺🇸" },
  EUR: { name: "Euro",              flag: "🇪🇺" },
  GBP: { name: "British Pound",     flag: "🇬🇧" },
  CHF: { name: "Swiss Franc",       flag: "🇨🇭" },
  SEK: { name: "Swedish Krona",     flag: "🇸🇪" },
  NOK: { name: "Norwegian Krone",   flag: "🇳🇴" },
  DKK: { name: "Danish Krone",      flag: "🇩🇰" },
  CAD: { name: "Canadian Dollar",   flag: "🇨🇦" },
  SAR: { name: "Saudi Riyal",       flag: "🇸🇦" },
  AED: { name: "UAE Dirham",        flag: "🇦🇪" },
  CNY: { name: "Chinese Yuan",      flag: "🇨🇳" },
  XOF: { name: "CFA Franc",         flag: "🌍" },
  NGN: { name: "Nigerian Naira",    flag: "🇳🇬" },
  GHS: { name: "Ghanaian Cedi",     flag: "🇬🇭" },
};

interface RateRow { code: string; buy: number; sell: number; }
interface RatesData { updatedAt: string; updatedBy: string; rates: RateRow[]; }

export default function AdminPage() {
  const [password, setPassword]   = useState("");
  const [authed, setAuthed]       = useState(false);
  const [authError, setAuthError] = useState(false);
  const [data, setData]           = useState<RatesData | null>(null);
  const [edited, setEdited]       = useState<RateRow[]>([]);
  const [status, setStatus]       = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/rates", {
      headers: { "x-admin-password": password },
    });
    if (res.ok) {
      const json: RatesData = await res.json();
      setData(json);
      setEdited(json.rates.map(r => ({ ...r })));
      setAuthed(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const updateRate = (code: string, field: "buy" | "sell", value: string) => {
    setEdited(prev => prev.map(r =>
      r.code === code ? { ...r, [field]: parseFloat(value) || 0 } : r
    ));
    setStatus("idle");
  };

  const save = async () => {
    setStatus("saving");
    const res = await fetch("/api/admin/rates", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ rates: edited, updatedBy: "Admin" }),
    });
    if (res.ok) {
      const json = await res.json();
      setStatus("saved");
      setStatusMsg(`Saved at ${new Date(json.updatedAt).toLocaleTimeString()}`);
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setStatusMsg("Save failed — check server logs");
    }
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ updatedAt: new Date().toISOString(), updatedBy: "Admin", rates: edited }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "live-rates.json"; a.click();
    URL.revokeObjectURL(url);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0a0f2e] flex items-center justify-center px-4">
        <form onSubmit={login} className="bg-[#141b4d] rounded-2xl p-8 w-full max-w-sm shadow-2xl border border-white/10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#1B2A87] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">One World Admin</h1>
            <p className="text-blue-300 text-sm mt-1">Rates Management Panel</p>
          </div>
          <div className="space-y-4">
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F97316] text-sm"
            />
            {authError && (
              <p className="text-red-400 text-xs text-center">Incorrect password</p>
            )}
            <button type="submit"
              className="w-full py-3 bg-[#F97316] text-white rounded-xl font-semibold hover:bg-orange-500 transition-colors text-sm">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1B2A87] px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-400" /> One World — Rates Admin
            </h1>
            {data && (
              <p className="text-blue-300 text-xs mt-0.5 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Last saved: {new Date(data.updatedAt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}
              </p>
            )}
          </div>
          <button onClick={() => { setAuthed(false); setPassword(""); }}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Info banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
          <div>
            <strong>Update rates daily</strong> — enter today's buy and sell rates below, then click Save.
            Changes take effect immediately in development. On Vercel, click <strong>Export JSON</strong>, replace <code className="bg-amber-100 px-1 rounded">src/data/live-rates.json</code>, and redeploy.
          </div>
        </div>

        {/* Rates table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <div className="p-4 md:p-6 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Today's Exchange Rates vs GMD</h2>
            <p className="text-sm text-gray-500 mt-0.5">All values are GMD per 1 unit of foreign currency</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="text-left py-3 px-4">Currency</th>
                  <th className="text-center py-3 px-4">We Buy (GMD)</th>
                  <th className="text-center py-3 px-4">We Sell (GMD)</th>
                  <th className="text-center py-3 px-4">Spread</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {edited.map(rate => {
                  const meta = RATE_META[rate.code] || { name: rate.code, flag: "🏳" };
                  const spread = (rate.buy - rate.sell).toFixed(3);
                  return (
                    <tr key={rate.code} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{meta.flag}</span>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{rate.code}</div>
                            <div className="text-xs text-gray-500">{meta.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="number" step="0.001" min="0"
                          value={rate.buy}
                          onChange={e => updateRate(rate.code, "buy", e.target.value)}
                          className="w-full text-center px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A87] font-medium"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="number" step="0.001" min="0"
                          value={rate.sell}
                          onChange={e => updateRate(rate.code, "sell", e.target.value)}
                          className="w-full text-center px-3 py-2 border border-blue-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A87] font-medium text-[#1B2A87]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center text-sm text-gray-500 font-mono">
                        {spread}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={save} disabled={status === "saving"}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1B2A87] text-white rounded-xl font-semibold hover:bg-[#162275] transition-colors disabled:opacity-60 text-sm">
            {status === "saving" ? "Saving..." : <><Save className="w-4 h-4" /> Save Rates</>}
          </button>
          <button onClick={exportJson}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm">
            <Download className="w-4 h-4" /> Export JSON
          </button>
        </div>

        {status === "saved" && (
          <div className="mt-4 flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm">
            <CheckCircle className="w-4 h-4" /> {statusMsg}
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
            <AlertCircle className="w-4 h-4" /> {statusMsg}
          </div>
        )}
      </div>
    </div>
  );
}
