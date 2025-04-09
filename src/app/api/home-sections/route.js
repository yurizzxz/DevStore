import { getConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  let connection;
  try {
    connection = await getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM home_sections WHERE ativo = true ORDER BY ordem"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Erro ao buscar seções:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}
