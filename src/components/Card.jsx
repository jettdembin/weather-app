import React, { Fragment } from "react";

import "./Card.css";

import { convertToEST } from "./Card/utils";

const Card = ({ weatherData, city }) => {
  return (
    <section className="card">
      <h1
        style={{
          fontSize: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        Weather Information{" "}
        <span
          style={{
            fontSize: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ☀️
        </span>
      </h1>
      <h2 style={{ fontSize: "32px", marginTop: "0" }}>{city}</h2>
      <div>
        {weatherData?.length > 0 ? (
          weatherData?.map((weather, index) => {
            const { values } = weather || {};
            return (
              <Fragment key={index}>
                <h4 style={{ marginRight: "auto" }}>
                  <b>Time: {!!weather.time && convertToEST(weather.time)}</b>
                </h4>
                <ul>
                  <li>Temperature: {values.temperature} °C</li>
                  <li>Humidity: {values.humidity}%</li>
                  <li>Wind Speed: {values.windSpeed} m/s</li>
                  <li>UV Index: {values.uvIndex}</li>
                </ul>
              </Fragment>
            );
          })
        ) : (
          <li>No weather data available</li>
        )}
      </div>
    </section>
  );
};

export default Card;
