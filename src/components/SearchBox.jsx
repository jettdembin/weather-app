import React, { useState } from "react";
import { toast } from "react-toastify";
import "./SearchBox.css";
// Import the React Toastify CSS file
import "react-toastify/dist/ReactToastify.css";

const SearchBox = ({
  setWeatherData,
  isFetchingData,
  setIsFetchingData,
  setCity,
  setShowFilter,
  showFilter,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsFetchingData(true);

    // Encapsulate the fetch call within toast.promise
    toast
      .promise(
        // This is the promise you want to wait for
        (async () => {
          const response = await fetch(
            `https://api.tomorrow.io/v4/weather/history/recent?location=${searchValue}&apikey=${
              import.meta.env.VITE_APP_API_KEY
            }`
          );
          const data = await response.json();

          if (!response.ok) {
            throw new Error("Failed to fetch weather data");
          }
          setWeatherData(data.timelines.hourly);
          setCity(searchValue);
          console.log("Weather API response:", data.timelines.hourly);
          console.log("searchValue", searchValue);
          return data; // Return data for success state
        })(),
        {
          // Pending toast message or options
          pending: {
            render() {
              return "Fetching weather data...";
            },
            // Other options
            icon: true,
          },
          // Success toast message or options
          success: {
            render({ data }) {
              return `Weather data fetched successfully for ${searchValue}!`; // Customize message using response data if needed
            },
            // Other options
            icon: "🌤",
          },
          // Error toast message or options
          error: {
            render({ data }) {
              // data is undefined if not passed in the error
              return `Error fetching weather data!`;
            },
            icon: "⚠️",
          },
        }
      )
      .finally(() => setIsFetchingData(false));
  };

  return (
    <>
      <form className="search-container search-box" onSubmit={handleSearch}>
        <label className="">
          <input
            className=""
            type="text"
            placeholder="Search for city..."
            value={searchValue}
            disabled={isFetchingData}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <button type="submit" disabled={isFetchingData}>
          Search
        </button>
        <button type="button" onClick={() => setShowFilter(!showFilter)}>
          Filters
        </button>
      </form>
    </>
  );
};

export default SearchBox;
