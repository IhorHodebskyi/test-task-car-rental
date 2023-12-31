import styled from '@emotion/styled';
import { Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
  padding-left: 5px;
  margin-bottom: 8px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled(Field)`
  display: block;
  font-family: sans-serif;
  width: 224px;
  height: 48px;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px;
  border-color: rgba(247, 247, 251, 1);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  option {
    font-weight: normal;
  }

  display: flex;
  align-items: center;

  padding: 0 16px;

  transition: all 0.2s ease-out;

  cursor: pointer;

  & + input + & {
    border-top: 1px solid #c7ccd160;
  }
`;

export const Option = styled.option`
  color: #121417;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`;

export const InputLeft = styled(Field)`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &:focus,
  &:hover {
    outline-color: #3470ff;
  }
`;

export const InputRight = styled(Field)`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &:focus {
    outline-color: #3470ff;
  }
`;
export const LabelTop = styled.label`
  position: absolute;
  display: block;
  left: 0;
  top: -21px;
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
`;

export const LabelLeft = styled.label`
  position: absolute;
  display: block;
  left: 20px;
  top: 15px;
  z-index: 9;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const LabelRight = styled.label`
  position: absolute;
  display: block;
  left: 180px;
  top: 15px;
  z-index: 9;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 12px 48px;
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
