import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  row-gap: 20px;
  max-width: 1184px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  color: #3470ff;
  margin-top: 100px;
  margin-bottom: 20px;
  width: 500;
  size: 16;
  line-height: 24px;
  &:focus,
  &:hover {
    color: #0b44cd;
  }
`;
