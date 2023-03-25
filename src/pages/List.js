import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TotalCity from '../components/TotalCity';
import Players from '../components/Players';

const List = () => {
  const { id } = useParams();
  const [citySelected, setCountrySelected] = useState(+id);
  const cities = useSelector((state) => state.cities.cities);

  useEffect(() => {
    setCountrySelected(cities.find((city) => city.id === +id));
  }, [cities, id]);

  return (
    <div>
      <TotalCity citySelected={citySelected} />
      <div className="players-city">PLAYERS LIST</div>
      <Players citySelected={citySelected} />
    </div>
  );
};

export default List;
