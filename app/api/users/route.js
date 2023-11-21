import { user } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  let data = await user;
  // try {
  //   await mongoose.connect(connectionStr);
  //   data = await Product.find();
  // } catch (error) {
  //   data = { success: false };
  // }
  return NextResponse.json({ data, success: true });
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
