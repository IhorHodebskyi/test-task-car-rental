import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 1184px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: auto;
`;

export const Link = styled(NavLink)`
  padding: 18px 45px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  color: white;
  background-color: orangered;
  border-color: #0b44cd;
  color: white;
  background-color: #0b44cd;
`;
export const Title = styled.h1`
  margin-bottom: 40px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
export const Item = styled.li`
  width: 250px;
  .p {
    font-weight: 900;
    size: 24px;
    line-height: 32px;
    color: #121417;
  }
`;

export const Paragraph = styled.p`
  font-weight: 900;
  size: 24px;
  line-height: 32px;
  color: #121417;
`;
