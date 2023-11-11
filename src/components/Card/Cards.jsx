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
const Cards = ({ car }) => {
  return (
    <>
      <Li key={car.id} id={car.id}>
        <DivImg>
          <ButtonSvg>
            <Svg>
              <use href={`${sprite}#icon-normal-1`} />
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
