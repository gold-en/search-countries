import React from "react";
import "../styles/countrycard.css";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  return (
    <div className="country-tile">
      <Link to={`/${props.id}`}>
        <img src={props.flagUrl} />
        <div className="country-info">
          <h1>{props.name}</h1>
          <h2>Population: {props.population}</h2>
          <h2>Region: {props.region}</h2>
          <h2>Capital: {props.capital}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
