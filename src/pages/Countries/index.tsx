import React, { useEffect, useState } from "react";
import { getCountryData } from "../../api";
import CountriesTable from "./components/CountriesTable";
import Filters from "./components/Filters";
import { Country } from "./constants";
import "./Countries.scss";

const Countries = () => {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [filteredCountries, setFilteredCountries] = useState<Array<Country>>(
    []
  );

  useEffect(() => {
    getCountryData()
      .then((res) => {
        setCountries(res.data);
        setFilteredCountries(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleFilter = (filtered: Array<Country>) => {
    setFilteredCountries(filtered);
  };

  return (
    <div className="countries-container">
      <h2 className="heading">Countries Info</h2>
      <Filters countries={countries} onFilter={handleFilter} />
      <CountriesTable countriesData={filteredCountries} />
    </div>
  );
};

export default Countries;
