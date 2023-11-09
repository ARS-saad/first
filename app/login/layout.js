import Pic from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";

function layout({ children }) {
  return (
    <div>
      <h1>Login page</h1>
      <ul>
        <li>
          <Link href="/login/ali">Ali</Link>
        </li>
        <li>
          <Link href="/login/hasan">Hasan</Link>
        </li>
        <li>
          <Link href="/login/omor">Omor</Link>
        </li>
        <li>
          <Link href="/login/talha">Talha</Link>
        </li>
        <li>
          <Link href="/login/saad">Saad</Link>
        </li>
      </ul>
      {children}
      <Link href="/" className="bg-white text-black mx-2 rounded px-2">
        Go to home page
      </Link>
      <Image src={Pic} alt="It's an icon" height={200} width={200} />
    </div>
  );
}

export const metadata = {
  title: "login's title!! ok",
};

export default layout;
