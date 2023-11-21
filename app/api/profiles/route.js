import { connectionStr } from "@/lib/db";
import { Profile } from "@/lib/model/profile";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionStr);
    data = await Profile.find();
  } catch (error) {
    data = { result: error };
    success = false;
  }
  return NextResponse.json({ result: data, success });
}

export async function POST(req) {
  const payload = await req.json();
  await mongoose.connect(connectionStr);
  let profile = new Profile(payload);
  const result = await profile.save();
  return NextResponse.json({ result, success: true });
}
