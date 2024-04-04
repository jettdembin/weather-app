import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Card from "./components/Card";
import Filter from "./components/Filter"; // Import the Filter component
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

// Use environment variable

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState(""); // Initialize city with empty string
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [error, setError] = useState(null);
  const [showFilter, setShowFilter] = useState(false); // [1

  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  //Uncomment if want to have a default city fetch on mount of application
  // useEffect(() => {
  //   let ignore;

  //   const fetchData = async () => {
  //     setIsFetchingData(true);
  //     const DEFAULT_CITY = "Austin"; // Set a default city

  //     try {
  //       const response = await fetch(
  //         `https://api.tomorrow.io/v4/weather/history/recent?location=${DEFAULT_CITY}&apikey=${API_KEY}`
  //         // `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${API_KEY}&include=minutely`
  //         // `https://api.weatherbit.io/v2.0/forecast/daily?apikey=${API_KEY}&city=${searchValue}`
  //       );
  //       const data = await response.json();

  //       // Check if the component is still mounted and only then update the state
  //       if (!ignore) {
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch weather data");
  //         }
  //         setWeatherData(data.timelines.hourly);
  //         console.log("Weather API response:", data.timelines.hourly); // Log the response
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       setError(error?.message || "Failed to fetch weather data");
  //     } finally {
  //       // Check if the component is still mounted and only then update the state
  //       if (!ignore) {
  //         setIsFetchingData(false);
  //       }
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  return (
    <>
      <div className="App">
        <Header />
        {error && <p>{error}</p>}
        <div className="content">
          {/* Display search box */}
          <div>
            <SearchBox
              isFetchingData={isFetchingData}
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              setCity={setCity}
              setWeatherData={setWeatherData}
              setIsFetchingData={setIsFetchingData}
            />
          </div>
          {/* Display filter options if user clicks filters*/}
          {showFilter && (
            <Filter
              showFilter={showFilter}
              applyFilters={(filters) => console.log(filters)}
              isFetchingData={isFetchingData}
              weatherData={weatherData}
            />
          )}

          {isFetchingData ? (
            <p>Loading...</p>
          ) : (
            <Card
              weatherData={weatherData}
              setWeatherData={setWeatherData}
              city={city}
            />
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
