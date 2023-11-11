"use client";

import { useState } from "react";

function page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUser = async () => {
    let res = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age }),
    });
    res = await res.json();
    if (!res.success) {
      alert("Some ERROR...");
    }
    console.log(res);
  };

  return (
    <div className="flex flex-col bg-5 m-5  w-[500px]">
      <h1 className="text-xl font-bold">Add New User</h1>
      <input
        type="text"
        placeholder="Enter name"
        className="my-2 rounded p-2 text-black font-bold"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
        className="my-2 rounded p-2 text-black font-bold"
      />
      <button
        className="bg-white text-black rounded-lg border-4 border-black px-2 w-[100px]"
        onClick={addUser}
      >
        Add user
      </button>
    </div>
  );
}

export default page;
