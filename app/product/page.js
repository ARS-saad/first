import fetching from "@/lib/fetching";
import Link from "next/link";

export default async function page() {
  const product = await fetching();
  // console.log(product);
  // let x = [...product.posts];
  //   console.log(x.title);
  return (
    <div>
      <h1>Product list:</h1>
      {product.map((item) => (
        <h1 key={item.id}>
          <Link href={`/product/${item.id}`}>Title: {item.title}</Link>
        </h1>
      ))}
    </div>
  );
}

// export default page;
