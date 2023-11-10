import styled from '@emotion/styled';
export const Li = styled.li`
  width: 274px;
  height: 450px;
`;
export const DivImg = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  overflow: hidden;
  float: left;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 18px;
  height: 18px;
`;

export const Img = styled.img`
  height: 100%;
`;
export const Title = styled.p`
  margin-bottom: 8px;
  span {
    font-weight: 500;
    size: 16px;
    line-height: 24px;
    color: #121417;
  }
  span:nth-of-type(2) {
    color: #3470ff;
  }
  span:last-child {
    text-align: right;
  }
`;
export const List = styled.p`
  span {
    font-weight: 400;
    size: 12px;
    line-height: 18px;
    color: rgba(130, 130, 130, 0.5);
  }
`;

export const Button = styled.button`
  padding: 12px 99px 12px 99px;
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
