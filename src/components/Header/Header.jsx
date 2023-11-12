import { HeaderWrapper, Link, Logo } from './Header.styled';

const Header = () => {
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
