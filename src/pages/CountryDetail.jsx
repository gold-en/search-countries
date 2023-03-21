import React from 'react';
import { useParams } from 'react-router-dom';
import CountryDetailCard from '../components/CountryDetailCard';

const CountryDetail = () => {
  const params = useParams();

  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.id}?fullText=true`)
      .then(res => res.json())
      .then(data => setCountry(data));
  }, [params.id]);
  console.log(country);

  const countryElement = country ? (
    country.map(country => (
      <CountryDetailCard
        key={country.name.official}
        flagUrl={country.flags.png}
        name={country.name.common}
        nativeName={country.name.nativeName}
        population={country.population}
        region={country.region}
        subRegion={country.subregion}
        capital={country.capital[0]}
        topLevelDomain={country.tld[0]}
        currencies={country.currencies}
        languages={country.languages}
        borderCountries={country.borders}
      />
    ))
  ) : (
    <h2>Loading...</h2>
  );

  return <>{countryElement}</>;
};

export default CountryDetail;
