import { useState } from "react";

const AddHotelData = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;

    setFormData((formData) => ({
      ...formData,
      [name]:
        name === "rating"
          ? parseFloat(value)
          : name === "reservationsNeeded"
          ? event.target.checked
          : name === "isParkingAvailable"
          ? event.target.checked
          : name === "isWifiAvailable"
          ? event.target.checked
          : name === "isPoolAvailable"
          ? event.target.checked
          : name === "isSpaAvailable"
          ? event.target.checked
          : name === "isRestaurantAvailable"
          ? event.target.checked
          : value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        "https://be-4-4-hw-2-git-main-nihals-projects-b86ee0fe.vercel.app/hotels",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add movie.");
      }

      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="nameInput">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            id="nameInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="categoryInput">Category:</label>
          <br />
          <select name="category" id="categoryInput" onChange={inputHandler}>
            <option value="">-- Select --</option>
            <option value="Budget">Budget</option>
            <option value="Mid-Range">Mid-Range</option>
            <option value="Luxury">Luxury</option>
            <option value="Boutique">Boutique</option>
            <option value="Resort">Resort</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          <label htmlFor="locationInput">Location:</label>
          <br />
          <input
            type="text"
            name="location"
            id="locationInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="ratingInput">Rating:</label>
          <br />
          <input
            type="text"
            name="rating"
            id="ratingInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="websiteInput">Website:</label>
          <br />
          <input
            type="text"
            name="website"
            id="websiteInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="phoneNumberInput">Phone Number:</label>
          <br />
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumberInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="checkInTimeInput">Check In Time:</label>
          <br />
          <input
            type="text"
            name="checkInTime"
            id="checkInTimeInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="checkOutTimeInput">Check Out Time:</label>
          <br />
          <input
            type="text"
            name="checkOutTime"
            id="checkOutTimeInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="amenitiesInput">Amenities:</label>
          <br />
          <input
            type="text"
            name="amenities"
            id="amenitiesInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="priceRangeInput">Price Range:</label>
          <br />
          <select
            name="priceRange"
            id="priceRangeInput"
            onChange={inputHandler}
          >
            <option value="">-- Select --</option>
            <option value="$$ (11-30)">$$ (11-30)</option>
            <option value="$$$ (31-60)">$$$ (31-60)</option>
            <option value="$$$$ (61+)">$$$$ (61+)</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          <label htmlFor="reservationsNeeded">
            <input
              type="checkbox"
              name="reservationsNeeded"
              id="reservationsNeeded"
              onChange={inputHandler}
            />
            Reservations Needed
          </label>
          <br />
          <label htmlFor="isParkingAvailable">
            <input
              type="checkbox"
              name="isParkingAvailable"
              id="isParkingAvailable"
              onChange={inputHandler}
            />
            Is Parking Available
          </label>
          <br />
          <label htmlFor="isWifiAvailable">
            <input
              type="checkbox"
              name="isWifiAvailable"
              id="isWifiAvailable"
              onChange={inputHandler}
            />
            Is Wifi Available
          </label>
          <br />
          <label htmlFor="isPoolAvailable">
            <input
              type="checkbox"
              name="isPoolAvailable"
              id="isPoolAvailable"
              onChange={inputHandler}
            />
            Is Pool Available
          </label>
          <br />
          <label htmlFor="isSpaAvailable">
            <input
              type="checkbox"
              name="isSpaAvailable"
              id="isSpaAvailable"
              onChange={inputHandler}
            />
            Is Spa Available
          </label>
          <br />
          <label htmlFor="isRestaurantAvailable">
            <input
              type="checkbox"
              name="isRestaurantAvailable"
              id="isRestaurantAvailable"
              onChange={inputHandler}
            />
            Is Restaurant Available
          </label>
          <br />
          <br />

          <label htmlFor="photosInput">Photos:</label>
          <br />
          <input
            type="text"
            name="photos"
            id="photosInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default AddHotelData;
