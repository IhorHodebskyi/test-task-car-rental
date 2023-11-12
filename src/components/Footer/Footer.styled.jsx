import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  border-top: solid 1px #121417;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: end;
  max-width: 1184px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
  .P {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
  }
`;

export const Link = styled(NavLink)``;
