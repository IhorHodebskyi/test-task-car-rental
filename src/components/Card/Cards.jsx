import { Img, Li } from './Cards.styled';

const Cards = ({ car }) => {
  console.log(car);

  return (
    <Li key={car.id}>
      <Img src={car.img || car.photoLink} alt={car.description} />
      <p>
        <span>{car.make}</span>
        <span>{car.model}</span>
        <span>{car.year}</span>
        <span>{car.rentalPrice}</span>
      </p>

      <p>
        <span>{car.address}|</span>
        <span>{car.rentalCompany}|</span>
        <span>{car.type}|</span>
        <span>{car.make}|</span>
        <span>{car.mileage}|</span>
        <span>{car.accessories[2]}</span>
      </p>
      <button>Learn more</button>
    </Li>
  );
};
export default Cards;
