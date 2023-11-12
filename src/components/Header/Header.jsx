// import { useDispatch } from 'react-redux';
import { HeaderWrapper, Link, Logo } from './Header.styled';
// import { useEffect } from 'react';
// import { fetchCars } from 'components/redux/cars/operations';
// import { changeFilter } from 'components/redux/filter/filterSlice';

const Header = () => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchCars(1));
  //     dispatch(changeFilter({ make: '', price: '', From: '', to: '' }));
  //   }, []);

  return (
    <>
      <HeaderWrapper>
        <Logo>The car is waiting ahead</Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
