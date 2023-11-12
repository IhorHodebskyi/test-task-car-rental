import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleCars } from 'components/redux/cars/selectors';

import { useState } from 'react';
import { fetchCars } from 'components/redux/cars/operations';
import Cards from 'components/Card/Card';
import { Button, Ul } from './Catalog.styled';
import FormSearch from 'components/Form/Form';

const CarsList = () => {
  const cars = useSelector(selectVisibleCars);
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  const onNextFetch = () => {
    setPage(page + 1);
    dispatch(fetchCars(page));
  };

  return (
    <>
      <FormSearch />
      <Ul>{cars && cars.map(car => <Cards car={car} />)}</Ul>
      {cars.length % 12 === 0 && (
        <Button onClick={onNextFetch}>Load more</Button>
      )}
    </>
  );
};

export default CarsList;
