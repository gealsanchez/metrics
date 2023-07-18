import React from 'react';
import { useSelector } from 'react-redux';
import Team from './Team';

const Cities = () => {
  const cities = useSelector((state) => state.cities.cities);

  return (
    <ul className="cities-container">
      {cities.map((city) => (
        <Team
          key={city.id}
          id={city.id}
          city={city.city}
          image={city.image}
          team={city.full_name}
        />
      ))}
    </ul>
  );
};

export default Cities;
