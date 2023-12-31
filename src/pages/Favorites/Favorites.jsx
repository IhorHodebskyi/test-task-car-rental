import { useSelector } from 'react-redux';
import { selectFavorites } from 'components/redux/favorite/selectors';
import { Ul, Wrapper } from './Favorites.styled';
import Card from 'components/Card/Card';

const Favorites = () => {
  const { favorites } = useSelector(selectFavorites);
  return (
    <>
      <Wrapper>
        {favorites.length === 0 ? (
          <h1>There are no favorite cars</h1>
        ) : (
          <Ul>
            {favorites.map(favorite => (
              <Card car={favorite} />
            ))}
          </Ul>
        )}
      </Wrapper>
    </>
  );
};

export default Favorites;
