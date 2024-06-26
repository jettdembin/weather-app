import React, { useEffect, useState } from "react";
import "./Filter.css";

const Filter = ({ isFetchingData, weatherData, setFilteredWeatherData }) => {
  const [filterValues, setFilterValues] = useState({
    minTemperature: null,
    maxTemperature: null,
    category: "All",
    city_name: "",
    state_code: "",
    country_code: "",
    timezone: "",
    lat: "",
    lon: "",
    sources: [],
  });

  const resetFilters = () => {
    setFilterValues(null);
  };

  const applyFilters = () => {
    const filteredData = weatherData?.filter((data) => {
      if (
        data.values.temperature > filterValues.minTemperature &&
        data.values.temperature < filterValues.maxTemperature
      ) {
        return data;
      }
    });
    setFilteredWeatherData(filteredData);
    console.log("Filtered Data", filteredData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
  };

  useEffect(() => {
    applyFilters();
  }, [filterValues]);

  return (
    <div className="filter-container">
      <button
        type="button"
        onClick={() => resetFilters()}
        style={{ marginBottom: "1rem" }}
      >
        Reset
      </button>
      <form>
        <label>
          Min Temperature:
          <input
            type="number"
            name="minTemperature"
            value={Number(filterValues.minTemperature) || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Max Temperature:
          <input
            type="number"
            name="maxTemperature"
            value={Number(filterValues.maxTemperature) || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City Name:
          <input
            type="text"
            name="city_name"
            value={filterValues.city_name || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          State Code:
          <input
            type="text"
            name="state_code"
            value={filterValues.state_code || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Country Code:
          <input
            type="text"
            name="country_code"
            value={filterValues.country_code || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Timezone:
          <input
            type="text"
            name="timezone"
            value={filterValues.timezone || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Latitude:
          <input
            type="number"
            name="lat"
            value={filterValues.lat || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Longitude:
          <input
            type="number"
            name="lon"
            value={filterValues.lon || ""}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Filter;
