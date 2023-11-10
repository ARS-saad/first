import { user } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(req, { params }) {
  const data = user.filter((item) => item.id == params.id);
  return NextResponse.json(
    data.length == 0 ? { result: "ID is not valid" } : data,
    { status: 200 }
  );
}
