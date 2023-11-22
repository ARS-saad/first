// "use client";

import Link from "next/link";

const getProduct = async () => {
  let data = await fetch("http://localhost:3000/api/profiles");
  data = await data.json();
  return data.result;
};

async function User() {
  const profiles = await getProduct();

  const reload = () => {
    window.location.reload();
  };
  // useEffect(() => {
  //   location.reload();
  // }, []);
  // location.reload();

  return (
    <div className="mx-[100px] my-10">
      <h1>Users:</h1>
      {profiles.length > 0 ? (
        profiles.map((item) => (
          <div
            key={item._id}
            className="relative border-dashed border-2 border-gray-500 rounded-xl px-10 py-5 my-5"
          >
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Password: "{item.password}"</p>
            <div className="absolute top-4 right-7">
              <Link
                href={`/user/${item._id}`}
                className="hover:bg-sky-700 px-5 py-2 rounded-md"
              >
                Edit
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>Something is wrong...</p>
      )}
      <Link
        href="/user/addUser"
        className="font-bold underline-offset-1 outline outline-offset-2 outline-cyan-500 rounded-lg px-3"
      >
        Go to add a new user
      </Link>
      {/* {reload()} */}
    </div>
  );
}

export default User;
