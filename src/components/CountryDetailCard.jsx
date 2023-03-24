import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/countrydetailcard.css';

const CountryDetailCard = props => {
  console.log(props);

  const nativeName = Object.values(props.nativeName)[0].common;
  const currency = Object.values(props.currencies)[0].name;
  const languages = Object.values(props.languages);
  const modifiedLanguages = languages.map((lang, i) =>
    i + 1 < languages.length ? `${lang}, ` : `${lang}`
  );
  const borderCountries = props?.borderCountries?.map(country => (
    <span key={country} className="borders">
      {country}
    </span>
  ));
  console.log(borderCountries);

  return (
    <>
      <div className="back-link">
        <Link to="/">
          <i class="fa-solid fa-arrow-left"></i> Back
        </Link>
      </div>
      <div className="detail-container">
        <img src={props.flagUrl} alt="country flag" />
        <div className="detail">
          <div className="name-detail">
            <div className="name-detail-1">
              <h2>{props.name}</h2>
              <div>
                <h4>
                  Native Name: <span>{nativeName}</span>
                </h4>
                <h4>
                  Population:{' '}
                  <span>{props.population.toLocaleString('en-US')}</span>
                </h4>
                <h4>
                  Region: <span>{props.region}</span>
                </h4>
                <h4>
                  Sub Region: <span>{props.subRegion}</span>
                </h4>
                <h4>
                  Capital: <span>{props.capital}</span>
                </h4>
              </div>
            </div>
            <div className="name-detail-2">
              <h4>
                Top Level Domain: <span>{props.topLevelDomain}</span>
              </h4>
              <h4>
                Currencies: <span>{currency}</span>
              </h4>
              <h4>
                Languages: <span>{modifiedLanguages}</span>
              </h4>
            </div>
          </div>

          <div className="border-detail">
            <h4>Border Countries:</h4>
            <div>{borderCountries ? borderCountries : 'None'}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetailCard;
