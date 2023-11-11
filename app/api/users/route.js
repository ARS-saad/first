import { user } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req) {
  let payload = await req.json();
  if (!payload.name || !payload.age) {
    return NextResponse.json(
      { result: "Require file is not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "New user created", success: true },
    { status: 201 }
  );
}
