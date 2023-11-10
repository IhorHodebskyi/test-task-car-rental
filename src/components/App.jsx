import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import CarsList from './CarList/CarsList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<CarsList />} />
        <Route path="catalog/:car" />
        <Route path="favorites" />
      </Route>
      <Route path="*"></Route>
    </Routes>
  );
};
