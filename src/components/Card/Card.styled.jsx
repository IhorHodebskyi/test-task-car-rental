import styled from '@emotion/styled';
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const ButtonSvg = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
`;
export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;

export const Img = styled.img`
  height: 100%;
`;
export const Title = styled.p`
  width: 274px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;

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
    margin-left: 5px;
  }
`;
export const List = styled.p`
  span {
    word-break: break-all;
    font-weight: 400;
    size: 12px;
    line-height: 18px;
    color: rgba(130, 130, 130, 0.5);
  }
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
