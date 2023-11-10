export default async function fetching() {
  let data = await fetch("https://dummyjson.com/posts");
  data = await data.json();
  console.log("data ");
  return data.posts;
}
