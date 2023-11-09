import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'components/redux/selectors';

import { useEffect } from 'react';
import { fetchCars } from 'components/redux/operations';
import Cards from 'components/Card/Cards';
import { Ul } from './CarsList.styled';

const CarsList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  console.log(cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Ul>
      {cars?.map(car => (
        <Cards car={car} />
      ))}
    </Ul>
  );
};

export default CarsList;
