import { useSelector } from 'react-redux';

import { selectFavorites } from 'components/redux/favorite/selectors';
import { Ul } from './Favorites.styled';
import Card from 'components/Card/Card';

const Favorites = () => {
  const { favorites } = useSelector(selectFavorites);
  return (
    <>
      {' '}
      <Ul>{favorites && favorites.map(favorite => <Card car={favorite} />)}</Ul>
    </>
  );
};

export default Favorites;
