import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '../assets/images/search-line.png';
import { searchCity } from '../redux/teams/teams';

function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const s = search.toLowerCase();
    const searchCities = cities.filter((city) => city.city.toLowerCase().includes(s));
    if (searchCities.length > 0) {
      dispatch(searchCity(searchCities));
    } else {
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by City"
        value={search}
        onChange={handleChange}
      />
      <button type="submit" className="navigation-icons">
        <img src={SearchIcon} alt="Search icon" />
      </button>
    </form>
  );
}

export default Search;
