"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const addUser = async () => {
    let res = await fetch("http://localhost:3000/api/profiles", {
      method: "POST",
      body: JSON.stringify({ name, age, password }),
    });
    res = await res.json();
    if (res.success) {
      route.back();
    }
  };

  return (
    <div className="flex flex-col bg-5 m-5 mt-10 ml-[500px] w-[500px]">
      <h1 className="text-xl font-bold">Add New User</h1>
      <input
        type="text"
        placeholder="Enter name"
        className="my-2 rounded p-2 text-black font-bold"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
        className="my-2 rounded p-2 text-black font-bold"
      />
      <input
        type="text"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        className="my-2 rounded p-2 text-black font-bold"
      />
      <div className="flex">
        <button
          className="bg-white text-black rounded-lg border-4 border-black px-2 w-[100px]"
          onClick={addUser}
        >
          Add user
        </button>
        <Link
          className="bg-white text-black rounded-lg border-4 border-black px-3 w-[100px]"
          href="/user"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}

export default Page;
