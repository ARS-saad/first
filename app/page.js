"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <p>It's main page</p>
      <br />
      <Link href="/login">Go to login page.</Link>
      <br />
      <Link href="/about">Go to about page.</Link>
      <br />
      <button
        onClick={() => router.push("./login")}
        className="bg-white text-black rounded-lg border-4 border-black px-2"
      >
        Go to login page
      </button>
      <br />
      <button
        onClick={() => router.push("./about")}
        className="bg-white text-black rounded-lg border-4 border-black px-2"
      >
        Go to about page
      </button>
      <br />
      <button
        onClick={() => router.push("./lecture")}
        className="bg-white text-black rounded-lg border-4 border-black px-2"
      >
        Go to lecture page
      </button>
      <br />
      <Link href="/product">Go to product page.</Link>
      <br />
      <Link href="/user">Go to user page.</Link>
    </main>
  );
}
