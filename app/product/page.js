const fetching = async () => {
  let data = await fetch("https://dummyjson.com/posts");
  data = await data.json();
  return data.posts;
};

export default async function page() {
  const product = await fetching();
  // console.log(product.title);
  // let x = [...product.posts];
  //   console.log(x.title);
  return (
    <div>
      <h1>Product list:</h1>
      {product.map((item) => (
        <p>Title: {item.title}</p>
      ))}
    </div>
  );
}

// export default page;
