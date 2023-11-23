import DeleteProperty from "@/lib/DeleteProperty";
import Link from "next/link";

const getProduct = async () => {
  let data = await fetch("http://localhost:3000/api/profiles", {
    cache: "no-cache",
  });
  data = await data.json();
  return data.result;
};

async function User() {
  const profiles = await getProduct();

  return (
    <div className="mx-[100px] my-10">
      <h1 className="text-2xl text-orange-700">Users:</h1>
      {profiles.length > 0 ? (
        profiles.map((item) => (
          <div
            key={item._id}
            className="relative border-dashed border-2 border-gray-500 rounded-xl px-10 py-5 my-5"
          >
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Password: "{item.password}"</p>
            <div className="flex absolute top-4 right-7">
              <Link
                href={`/user/${item._id}`}
                className="hover:bg-sky-700 px-5 py-2 rounded-md"
              >
                Edit
              </Link>
              <DeleteProperty id={item._id} />
            </div>
          </div>
        ))
      ) : (
        <p>Something is wrong...</p>
      )}
      <Link
        href="/user/addUser"
        className="font-bold p-2 outline outline-offset-2 outline-green-500 rounded-lg px-3 hover:bg-green-700 hover:outline-none"
      >
        Go to add a new user
      </Link>
    </div>
  );
}

export default User;
