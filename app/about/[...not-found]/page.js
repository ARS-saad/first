import Link from "next/link";

function NotFound() {
  return (
    <div className="text-xl font-bold text-center mt-10">
      <p>This about page is not found</p>
      <Link href="./">Go Back...</Link>
    </div>
  );
}

export default NotFound;
