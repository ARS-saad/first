import fetching from "@/lib/fetching";

async function page({ params }) {
  const product = await fetching();
  return <div>It's body part: {product[params.body - 1].body}</div>;
}

export async function generateStaticParams() {
  const product = await fetching();
  return product.map((item) => {
    body: item.id;
  });
}

export default page;
