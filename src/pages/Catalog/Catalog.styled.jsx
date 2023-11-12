import styled from '@emotion/styled';
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const Button = styled.button`
  padding: 12px 90px;
  border-radius: 12px;
  border-color: #3470ff;
  color: white;
  background-color: #3470ff;
  &:focus,
  &:hover {
    background-color: #0b44cd;
    border-color: #0b44cd;
  }
`;
