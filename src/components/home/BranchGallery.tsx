"use client";

import { Camera } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD REAL PHOTOS:
// 1. Drop your images into /public/photos/
//    Suggested names: branch-front.jpg, staff-team.jpg, counter.jpg, office.jpg
// 2. Replace the `src` values in PHOTOS below with "/photos/your-filename.jpg"
// 3. Remove the placeholder `PlaceholderPhoto` component — use <img> or next/image
// ─────────────────────────────────────────────────────────────────────────────

const PHOTOS = [
  { id: 1, label: "Our Branch — Kololi",       src: null, accent: "#1B2A87" },
  { id: 2, label: "Our Team",                  src: null, accent: "#F97316" },
  { id: 3, label: "The Exchange Counter",      src: null, accent: "#15803d" },
  { id: 4, label: "Kololi, The Gambia",        src: null, accent: "#7c3aed" },
];

function PlaceholderPhoto({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 rounded-2xl"
      style={{ background: `linear-gradient(135deg, ${accent}22 0%, ${accent}44 100%)`, border: `2px dashed ${accent}55` }}>
      <Camera className="w-8 h-8" style={{ color: accent }} />
      <span className="text-sm font-medium text-center px-4" style={{ color: accent }}>{label}</span>
      <span className="text-xs text-gray-400 text-center px-4">Add real photo to /public/photos/</span>
    </div>
  );
}

export default function BranchGallery() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-[#0a0f2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
            Visit Us in Kololi
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Come and see us at our branch — friendly staff, fast service, great rates
          </p>
        </div>

        {/* Grid: 1 large + 3 small */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridTemplateRows: "220px 220px" }}>
          {/* Large photo — spans 2 rows on md+ */}
          <div className="col-span-2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden">
            {PHOTOS[0].src ? (
              <img src={PHOTOS[0].src} alt={PHOTOS[0].label} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full min-h-[220px]">
                <PlaceholderPhoto label={PHOTOS[0].label} accent={PHOTOS[0].accent} />
              </div>
            )}
          </div>

          {/* 3 smaller photos */}
          {PHOTOS.slice(1).map(photo => (
            <div key={photo.id} className="rounded-2xl overflow-hidden">
              {photo.src ? (
                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full min-h-[100px]">
                  <PlaceholderPhoto label={photo.label} accent={photo.accent} />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          📍 Kololi, Senegambia Strip, The Gambia &nbsp;·&nbsp; Mon–Sat 8am–6pm &nbsp;·&nbsp; Sun 10am–4pm
        </p>
      </div>
    </section>
  );
}
