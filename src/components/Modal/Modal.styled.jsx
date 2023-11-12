import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 34px;
  background-color: #ffffff;
  border-radius: 14px;
`;

export const Cross = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  width: 24px;
  height: 24px;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #121417;
`;

export const Image = styled.img`
  width: 100%;
  height: 314px;
  display: block;

  border-radius: 14px;
`;

export const Wrap = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 8px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const Description = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 461px;
`;
export const Info = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  letter-spacing: -0.24px;

  width: 461px;
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
`;

export const ConditionSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
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
