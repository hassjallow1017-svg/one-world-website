import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "oneworld2024";
const GITHUB_TOKEN   = process.env.GITHUB_TOKEN   || "";
const GITHUB_OWNER   = process.env.GITHUB_OWNER   || "hassjallow1017-svg";
const GITHUB_REPO    = process.env.GITHUB_REPO    || "one-world-website";
const RATES_PATH     = "src/data/live-rates.json";

// ── helpers ────────────────────────────────────────────────────────────────

function githubHeaders() {
  return {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
}

async function getFileMeta(): Promise<{ sha: string; content: string } | null> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${RATES_PATH}`;
  const res = await fetch(url, { headers: githubHeaders(), cache: "no-store" });
  if (!res.ok) return null;
  const json = await res.json();
  return { sha: json.sha, content: json.content };
}

// ── GET — return current rates ─────────────────────────────────────────────

export async function GET(req: Request) {
  const auth = req.headers.get("x-admin-password");
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Try GitHub first
  if (GITHUB_TOKEN) {
    const meta = await getFileMeta();
    if (meta) {
      const decoded = Buffer.from(meta.content, "base64").toString("utf-8");
      return NextResponse.json(JSON.parse(decoded));
    }
  }

  // Fallback: local filesystem (dev only)
  try {
    const { readFileSync } = await import("fs");
    const { join } = await import("path");
    const data = readFileSync(join(process.cwd(), "src", "data", "live-rates.json"), "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({ error: "Could not load rates" }, { status: 500 });
  }
}

// ── POST — save rates via GitHub API ──────────────────────────────────────

export async function POST(req: Request) {
  const auth = req.headers.get("x-admin-password");
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { rates, updatedBy } = await req.json();
  if (!Array.isArray(rates) || rates.length === 0) {
    return NextResponse.json({ error: "Invalid rates data" }, { status: 400 });
  }

  const data = {
    updatedAt: new Date().toISOString(),
    updatedBy: updatedBy || "Admin",
    rates,
  };
  const content = Buffer.from(JSON.stringify(data, null, 2)).toString("base64");

  // ── GitHub API (production) ──
  if (GITHUB_TOKEN) {
    const meta = await getFileMeta();
    if (!meta) {
      return NextResponse.json({ error: "Could not fetch current file from GitHub" }, { status: 500 });
    }

    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${RATES_PATH}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: githubHeaders(),
      body: JSON.stringify({
        message: `Update exchange rates — ${new Date().toLocaleDateString("en-GB")}`,
        content,
        sha: meta.sha,
        branch: "main",
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("GitHub API error:", err);
      return NextResponse.json({ error: "GitHub save failed", detail: err }, { status: 500 });
    }

    return NextResponse.json({ success: true, updatedAt: data.updatedAt, via: "github" });
  }

  // ── Local filesystem fallback (dev) ──
  try {
    const { writeFileSync } = await import("fs");
    const { join } = await import("path");
    writeFileSync(join(process.cwd(), "src", "data", "live-rates.json"), JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, updatedAt: data.updatedAt, via: "filesystem" });
  } catch (err) {
    return NextResponse.json({ error: "Save failed" }, { status: 500 });
  }
}
