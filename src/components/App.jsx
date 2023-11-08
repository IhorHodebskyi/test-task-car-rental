import { Route, Router } from 'react-router';

export const App = () => {
  return (
    <Router>
      <Route path="/">
        <Route path="catalog”" />
        <Route path="catalog/:car”" />
        <Route path="favorites" />
        <Route path="favorites/:car" />
      </Route>
      <Route path="*"></Route>
    </Router>
  );
};
