import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const [successMessage, setSuccessMeassage] = useState("");
  const { data, loading, error } = useFetch(
    "https://be-4-4-hw-2-git-main-nihals-projects-b86ee0fe.vercel.app/hotels"
  );
  // console.log(data);

  const deleteHandler = async (hotelId) => {
    try {
      const response = await fetch(
        `https://be-4-4-hw-2-git-main-nihals-projects-b86ee0fe.vercel.app/hotels/${hotelId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete hotel data.");
      }

      const data = await response.json();
      if (data) {
        setSuccessMeassage("Hotel data deleted successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {data ? (
        <div>
          <h2>All Hotels</h2>
          <ul>
            {data.map((hotel) => (
              <li key={hotel._id}>
                {hotel.name}{" "}
                <button onClick={() => deleteHandler(hotel._id)}>Delete</button>
              </li>
            ))}
          </ul>
          <p>{successMessage}</p>
        </div>
      ) : (
        loading && <p>Loading...</p>
      )}
    </>
  );
};
export default Hotels;
