import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleCars } from 'components/redux/cars/selectors';

import { useEffect } from 'react';
import { fetchCars } from 'components/redux/cars/operations';
import Cards from 'components/Card/Cards';
import { Ul } from './CarsList.styled';
import FormCatalog from 'components/Form/Form';

const CarsList = () => {
  const cars = useSelector(selectVisibleCars);
  const dispatch = useDispatch();
  console.log(cars);
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <FormCatalog />
      <Ul>
        {cars?.map(car => (
          <Cards car={car} />
        ))}
      </Ul>
    </>
  );
};

export default CarsList;
