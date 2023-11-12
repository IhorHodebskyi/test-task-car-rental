import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { changeFilter } from './redux/filter/filterSlice';
import { fetchCars } from './redux/cars/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
    dispatch(changeFilter({ make: '', price: '', From: '', to: '' }));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:car" />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*"></Route>
    </Routes>
  );
};
