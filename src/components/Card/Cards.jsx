import {
  Button,
  ButtonSvg,
  DivImg,
  Img,
  Li,
  List,
  Svg,
  Title,
} from './Cards.styled';
import sprite from '../../img/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'components/redux/favorite/selectors';
import { addFavorite, removeFavorite } from 'components/redux/favorite/slice';
const Cards = ({ car }) => {
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavorites);

  const isFavorite = favoriteCars.favorites.some(({ id }) => id === car.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <>
      <Li key={car.id} id={car.id}>
        <DivImg>
          <ButtonSvg onClick={handleToggleFavorite}>
            <Svg>
              <use
                href={
                  isFavorite
                    ? `${sprite}#icon-active-1`
                    : `${sprite}#icon-normal-1`
                }
              />
            </Svg>
          </ButtonSvg>
          <Img src={car.img || car.photoLink} alt={car.description} />
        </DivImg>

        <Title>
          <span>{car.make} </span>
          <span>{car.model},</span>
          <span> {car.year}</span>
          <span>{car.rentalPrice}</span>
        </Title>

        <List>
          <span>{car.address.split(',')[1]}|</span>
          <span>{car.address.split(',')[2]}|</span>
          <span>{car.rentalCompany}|</span>
          <span>{car.type}|</span>
          <span>{car.make}|</span>
          <span>{car.mileage}|</span>
          <span>{car.accessories[2]}</span>
        </List>
        <Button>Learn more</Button>
      </Li>
    </>
  );
};
export default Cards;