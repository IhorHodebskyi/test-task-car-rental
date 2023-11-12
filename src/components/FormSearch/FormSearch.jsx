import { changeFilter } from 'components/redux/filter/filterSlice';
import {
  initialValues,
  optionsModel,
  optionsPrice,
} from 'components/utils/utils';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import {
  Button,
  Wrapper,
  InputContainer,
  InputLeft,
  InputRight,
  Label,
  LabelLeft,
  LabelRight,
  Select,
  SelectContainer,
} from './FormSearch.styled';

const FormSearch = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log(values);
    dispatch(changeFilter(values));
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form autoComplete="off">
            <Wrapper>
              <SelectContainer>
                <Label htmlFor="make">Enter the text</Label>
                <Select as="select" id="make" name="make">
                  {optionsModel.map(make => (
                    <option id={make} value={make}>
                      {make}
                    </option>
                  ))}
                </Select>
              </SelectContainer>
              <SelectContainer>
                <Label htmlFor="price">To $</Label>
                <Select as="select" id="price" name="price">
                  {optionsPrice.map(price => (
                    <option id={price} value={price}>
                      {price}
                    </option>
                  ))}
                </Select>
              </SelectContainer>
              <InputContainer>
                <LabelLeft htmlFor="From">From</LabelLeft>
                <InputLeft type="number" name="From" />
                <LabelRight htmlFor="to">To</LabelRight>
                <InputRight type="number" name="to" />
              </InputContainer>

              <Button type="submit">Search</Button>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormSearch;
