"use client";

function DeleteProperty(props) {
  const deleting = async () => {
    let response = await fetch(
      `http://localhost:3000/api/profiles/${props.id}`,
      {
        method: "delete",
      }
    );
    response = await response.json();
    if (response.success) {
      location.reload(true);
    }
  };
  return (
    <button
      className="hover:bg-red-700 px-5 py-2 rounded-md"
      onClick={deleting}
    >
      Delete
    </button>
  );
}

export default DeleteProperty;
