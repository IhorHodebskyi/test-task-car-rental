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
  /* font-size: 16px; */
  font-family: sans-serif;
  /* font-weight: 700; */
  color: #444;
  /* line-height: 1.3; */
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 224px;
  height: 48px;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  /* box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04); */

  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px;
  border-color: rgba(247, 247, 251, 1);
  /* -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none; */

  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  &:focus {
    outline-color: #3470ff;
  }
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

  &:focus {
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
