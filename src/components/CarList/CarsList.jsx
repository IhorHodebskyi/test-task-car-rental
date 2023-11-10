import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'components/redux/selectors';

import { useEffect } from 'react';
import { fetchCars } from 'components/redux/operations';
import Cards from 'components/Card/Cards';
import { Ul } from './CarsList.styled';
import FormCatalog from 'components/Form/Form';

const CarsList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

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
