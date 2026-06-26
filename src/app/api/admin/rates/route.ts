import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const RATES_FILE = join(process.cwd(), "src", "data", "live-rates.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "oneworld2024";

function getRatesFile() {
  try {
    return JSON.parse(readFileSync(RATES_FILE, "utf-8"));
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const auth = req.headers.get("x-admin-password");
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = getRatesFile();
  if (!data) return NextResponse.json({ error: "Could not read rates file" }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const auth = req.headers.get("x-admin-password");
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { rates, updatedBy } = await req.json();
    if (!Array.isArray(rates) || rates.length === 0) {
      return NextResponse.json({ error: "Invalid rates data" }, { status: 400 });
    }

    const data = {
      updatedAt: new Date().toISOString(),
      updatedBy: updatedBy || "Admin",
      rates,
    };

    writeFileSync(RATES_FILE, JSON.stringify(data, null, 2), "utf-8");
    return NextResponse.json({ success: true, updatedAt: data.updatedAt });
  } catch (err) {
    console.error("Failed to save rates:", err);
    return NextResponse.json({ error: "Failed to save rates file" }, { status: 500 });
  }
}
