import { useEffect } from 'react';
import sprite from '../../img/symbol-defs.svg';
import {
  Button,
  ConditionItem,
  ConditionList,
  ConditionSpan,
  Cross,
  Description,
  Image,
  Info,
  Item,
  List,
  Overlay,
  Span,
  Svg,
  TextWrap,
  Title,
  Wrap,
  Wrapper,
} from './Modal.styled';

const Modal = ({ onClose, car }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClickBackdrop}>
      <Wrapper>
        <Cross onClick={() => onClose()}>
          <Svg>
            <use href={`${sprite}#icon-x`} />
          </Svg>
        </Cross>
        <Image src={car.img} alt={car.make} width="461" height="248" />
        <Wrap>
          <TextWrap>
            <Title>
              {car.make} <Span>{car.model}, </Span>
              {car.year}
            </Title>
          </TextWrap>
          <List>
            <Item>{car.address.split(',')[1]}</Item>
            <Item>{car.address.split(',')[2]}</Item>
            <Item>Id: </Item>
            <Item>Year: {car.year}</Item>
            <Item>Type: {car.type}</Item>
          </List>
          <List>
            <Item>Fuel Consumption: {car.fuelConsumption}</Item>
            <Item>Engine Size: {car.engineSize}</Item>
          </List>
          <Description>{car.description}</Description>
          <Info>Accessories and functionalities:</Info>
          <List>
            {car.accessories.map(item => (
              <Item key={item}>{item}</Item>
            ))}
          </List>
          <List>
            {car.functionalities.map(item => (
              <Item key={item}>{item}</Item>
            ))}
          </List>
          <Info>Rental Conditions:</Info>
          <ConditionList>
            <ConditionItem>
              Minimum age:{' '}
              <ConditionSpan>
                {new Date().getFullYear() - car.year}
              </ConditionSpan>
            </ConditionItem>
            <ConditionItem>{car.rentalConditions.split('\n')[1]}</ConditionItem>
            <ConditionItem>{car.rentalConditions.split('\n')[2]}</ConditionItem>
            <ConditionItem>
              Mileage:{' '}
              <ConditionSpan>
                {car.mileage.toLocaleString('en-US')}
              </ConditionSpan>
            </ConditionItem>
            <ConditionItem>
              Price: <ConditionSpan>{car.rentalPrice}</ConditionSpan>
            </ConditionItem>
          </ConditionList>
        </Wrap>
        <Button
          onClick={() => {
            window.location.href = 'tel:+380730000000';
          }}
        >
          {' '}
          Rental car
        </Button>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;
