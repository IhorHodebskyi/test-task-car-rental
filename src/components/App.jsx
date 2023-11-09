import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog”" />
        <Route path="catalog/:car”" />
        <Route path="favorites" />
      </Route>
      <Route path="*"></Route>
    </Routes>
  );
};
