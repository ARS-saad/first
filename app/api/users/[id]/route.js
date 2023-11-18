import { user } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(req, { params }) {
  const data = user.filter((item) => item.id == params.id);
  return NextResponse.json(
    data.length == 0 ? { result: "ID is not valid" } : data[0],
    { status: 200 }
  );
}

export async function PUT(req, { params }) {
  const data = user.filter((item) => item.id == params.id);
  let payload = await req.json();
  payload.id = params.id;
  if (!payload.name) {
    payload.name = data[0].name;
  }
  if (!payload.age) {
    payload.age = data[0].age;
  }
  // console.log(data[0].age);
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(req, { params }) {
  let id = params.id;
  if (id) {
    return NextResponse.json(
      { result: "User deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal Error", success: false },
      { status: 400 }
    );
  }
}
