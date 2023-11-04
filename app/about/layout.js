import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/aboutTeacher">Teacher</Link>
        </li>
        <li>
          <Link href="/about/aboutStudent">Student</Link>
        </li>
      </ul>
      {children}
      <Link href="/" className="bg-white text-black mx-2 rounded px-2">
        Go to home page
      </Link>
    </div>
  );
}
