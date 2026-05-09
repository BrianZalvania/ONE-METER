import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, amount } = body;

    if (!email || !amount) {
      return NextResponse.json(
        { error: "Faltan datos" },
        { status: 400 }
      );
    }

    await db.query(
      "INSERT INTO leads (email, amount) VALUES (?, ?)",
      [email, amount]
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { error: "Este email ya fue registrado." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Error al guardar el email." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT id, email, amount, created_at FROM leads ORDER BY created_at DESC"
    );

    return NextResponse.json(rows);
  } catch {
    return NextResponse.json(
      { error: "Error al obtener los leads." },
      { status: 500 }
    );
  }
}