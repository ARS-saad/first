const fetching = async () => {
  let data = await fetch("https://dummyjson.com/posts");
  return data.json();
};

export default async function page() {
  const product = await fetching();
  //   console.log(product.posts);
  let x = [...product.posts];
  //   console.log(x.title);
  return (
    <div>
      <h1>Product list:</h1>
      {x.map((item) => (
        <p>Title: {item.title}</p>
      ))}
    </div>
  );
}

// export default page;
