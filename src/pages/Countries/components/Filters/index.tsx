import React, { useEffect, useState } from "react";
import { Country } from "../../constants";

type FiltersProps = {
  countries: Array<Country>;
  onFilter: (filteredCountries: Array<Country>) => void;
};

const Filters = ({ countries, onFilter }: FiltersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (filter) {
      case "<1M":
        filtered = filtered.filter((country) => country.population < 1000000);
        break;
      case "<5M":
        filtered = filtered.filter((country) => country.population < 5000000);
        break;
      case "<10M":
        filtered = filtered.filter((country) => country.population < 10000000);
        break;
      default:
        break;
    }

    onFilter(filtered);
  }, [searchTerm, filter, countries, onFilter]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilter("");
    onFilter(countries);
  };

  return (
    <div className="filters-container">
      <input
        type="text"
        placeholder="Country Name"
        onChange={handleSearch}
        value={searchTerm}
      />
      <select onChange={handleFilter} value={filter}>
        <option value="">Population</option>
        <option value="<1M">{"<1M"}</option>
        <option value="<5M">{"<5M"}</option>
        <option value="<10M">{"<10M"}</option>
      </select>
      <button onClick={clearFilters}>Clear</button>
    </div>
  );
};

export default Filters;
