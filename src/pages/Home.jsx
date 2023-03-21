import React from 'react';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data.slice(0, 5)));
  }, []);

  const countriesElements = countries.map(country => (
    <CountryCard
      key={country.name.official}
      flagUrl={country.flags.png}
      name={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital[0]}
      id={country.name.official}
    />
  ));

  return <div>{countriesElements}</div>;
};

export default Home;
