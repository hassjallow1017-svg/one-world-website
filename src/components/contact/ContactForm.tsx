"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const subjects = [
  "General Inquiry",
  "Money Transfer",
  "Currency Exchange",
  "Mobile Money",
  "Rate Inquiry",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", subject: subjects[0], message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMsg("");
    setForm({ name: "", phone: "", email: "", subject: subjects[0], message: "" });
  };

  if (status === "success") {
    return (
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-10 shadow-md text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">Message Received!</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thank you, <strong>{form.name}</strong>. We've received your enquiry and will get back to you as soon as possible.
        </p>
        <a
          href={`https://wa.me/2202517942?text=${encodeURIComponent(`Hi, I just sent a message via your website regarding: ${form.subject}`)}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors mr-3"
        >
          Also message us on WhatsApp
        </a>
        <button onClick={reset}
          className="mt-4 inline-block px-5 py-2.5 border border-[#1B2A87] text-[#1B2A87] rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}
      className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-md p-6 md:p-8 space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            disabled={status === "loading"}
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm disabled:opacity-60"
            placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
          <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
            disabled={status === "loading"}
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm disabled:opacity-60"
            placeholder="+220 ..." />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
          disabled={status === "loading"}
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm disabled:opacity-60"
          placeholder="you@email.com" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
        <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
          disabled={status === "loading"}
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm disabled:opacity-60">
          {subjects.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
        <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          disabled={status === "loading"}
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm resize-none disabled:opacity-60"
          placeholder="How can we help you?" />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-700 dark:text-red-400">Failed to send</p>
            <p className="text-xs text-red-600 dark:text-red-500 mt-0.5">{errorMsg}</p>
            <a href={`https://wa.me/2202517942?text=${encodeURIComponent(`Hi, I tried contacting you via your website. ${form.message}`)}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-block mt-2 text-xs text-green-600 dark:text-green-400 font-medium hover:underline">
              Send via WhatsApp instead →
            </a>
          </div>
        </div>
      )}

      <button type="submit" disabled={status === "loading"}
        className="w-full py-3.5 bg-[#1B2A87] text-white rounded-full font-semibold hover:bg-[#162275] transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We'll reply to your email address, or call you back on the number provided.
      </p>
    </form>
  );
}
