import { connectionStr } from "@/lib/db";
import { Profile } from "@/lib/model/profile";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const Id = { _id: params.profileId };
  const payload = await req.json();
  await mongoose.connect(connectionStr);
  const result = await Profile.findOneAndUpdate(Id, payload);
  return NextResponse.json({ result, success: true });
}

export async function GET(req, { params }) {
  const Id = { _id: params.profileId };
  await mongoose.connect(connectionStr);
  const result = await Profile.findById(Id);
  return NextResponse.json({ result, success: true });
}
