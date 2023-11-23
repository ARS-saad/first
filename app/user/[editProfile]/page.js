"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page({ params }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const getProductDetail = async () => {
    let productDetail = await fetch(
      `http://localhost:3000/api/profiles/${params.editProfile}`
    );
    productDetail = await productDetail.json();
    if (productDetail.success) {
      let result = productDetail.result;
      setName(result.name);
      setAge(result.age);
      setPassword(result.password);
    }
  };

  const update = async () => {
    let data = await fetch(
      `http://localhost:3000/api/profiles/${params.editProfile}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, age, password }),
      }
    );
    data = await data.json();
    if (data.result) {
      router.back();
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="flex flex-col bg-5 m-5 mt-10 ml-[500px] w-[500px]">
      <h1 className="text-xl font-bold">Update User</h1>
      <input
        type="text"
        value={name}
        className="my-2 rounded p-2 text-black font-bold"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="my-2 rounded p-2 text-black font-bold"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="my-2 rounded p-2 text-black font-bold"
      />
      <div className="flex">
        <button
          className="bg-white text-black rounded-lg border-4 border-black px-2 w-[130px]"
          onClick={update}
        >
          Update User
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
