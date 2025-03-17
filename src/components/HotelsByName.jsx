import useFetch from "../useFetch";

const HotelsByName = ({ name }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-4-hw-2-git-main-nihals-projects-b86ee0fe.vercel.app/hotels/${name}`
  );
  return (
    <>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <p>
            <strong>Location:</strong> {data.location}
          </p>
          <p>
            <strong>Rating:</strong> {data.rating}
          </p>
          <p>
            <strong>Price Range:</strong> {data.priceRange}
          </p>
        </div>
      ) : (
        loading && <p>Loading...</p>
      )}
    </>
  );
};
export default HotelsByName;
