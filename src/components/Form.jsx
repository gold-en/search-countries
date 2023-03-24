import React, { useEffect } from 'react';

export default function Form({ setCountries }) {
  const [countryName, setCountryName] = React.useState('');

  const [region, setRegion] = React.useState('');

  function handleChange(event) {
    const { value } = event.target;
    setCountryName(value);
  }

  function handleRegion(event) {
    const { value } = event.target;

    setRegion(value);
  }

  useEffect(() => {
    region &&
      fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then(res => res.json())
        .then(data => setCountries(data.slice(0, 20)));
  }, [region]);

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(data => setCountries(data));

    setCountryName('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search For a Country"
          onChange={handleChange}
          name="countryName"
          value={countryName}
        />
      </form>
      <br />
      <select id="region" value={region} onChange={handleRegion} name="region">
        <option value=""> Filter By Region </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
