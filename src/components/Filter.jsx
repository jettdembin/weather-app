import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ isFetchingData, weatherData }) => {
  const [filteredWeatherData, setFilteredWeatherData] = useState([]);
  const [filterValues, setFilterValues] = useState({
    minTemperature: "",
    maxTemperature: "",
    category: "All",
    city_name: "",
    state_code: "",
    country_code: "",
    timezone: "",
    lat: "",
    lon: "",
    sources: [],
  });

  const applyFilters = (filters) => {
    const filteredData = weatherData.filter((data) => {
      if (filters.minTemperature && data.temperature < filters.minTemperature) {
        return false;
      }
      if (filters.maxTemperature && data.temperature > filters.maxTemperature) {
        return false;
      }
      if (filters.city_name && data.city_name !== filters.city_name) {
        return false;
      }
      if (filters.state_code && data.state_code !== filters.state_code) {
        return false;
      }
      if (filters.country_code && data.country_code !== filters.country_code) {
        return false;
      }
      if (filters.timezone && data.timezone !== filters.timezone) {
        return false;
      }
      if (filters.lat && data.lat !== filters.lat) {
        return false;
      }
      if (filters.lon && data.lon !== filters.lon) {
        return false;
      }
      return true;
    });
    setFilteredWeatherData(filteredData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filterValues);
  };

  return (
    <div className="filter-container">
      <form onSubmit={handleSubmit}>
        <label>
          Min Temperature:
          <input
            type="number"
            name="minTemperature"
            value={filterValues.minTemperature}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Max Temperature:
          <input
            type="number"
            name="maxTemperature"
            value={filterValues.maxTemperature}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City Name:
          <input
            type="text"
            name="city_name"
            value={filterValues.city_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          State Code:
          <input
            type="text"
            name="state_code"
            value={filterValues.state_code}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Country Code:
          <input
            type="text"
            name="country_code"
            value={filterValues.country_code}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Timezone:
          <input
            type="text"
            name="timezone"
            value={filterValues.timezone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Latitude:
          <input
            type="number"
            name="lat"
            value={filterValues.lat}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Longitude:
          <input
            type="number"
            name="lon"
            value={filterValues.lon}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Filter;
