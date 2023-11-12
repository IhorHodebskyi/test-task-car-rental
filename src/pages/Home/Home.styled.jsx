import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 40px;
  padding-left: 200px;
`;

export const Link = styled(NavLink)`
  padding: 18px 45px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  color: white;
  background-color: orangered;
  border-color: #3470ff;
  color: white;
  background-color: #3470ff;
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
