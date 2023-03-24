import React from 'react';
import '../styles/countrycard.css';
import { Link } from 'react-router-dom';

const CountryCard = props => {
  return (
    <div className="country-tile">
      <Link to={`/${props.id}`}>
        <img src={props.flagUrl} alt="country-flag" />
        <div className="country-info">
          <h1>{props.name}</h1>
          <h4>
            Population: <span>{props.population.toLocaleString('en-US')}</span>
          </h4>
          <h4>
            Region: <span>{props.region}</span>
          </h4>
          <h4>
            Capital: <span>{props.capital}</span>
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
