import { changeFilter } from 'components/redux/filter/filterSlice';
import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

const optionsModel = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];
const initialValues = {
  make: '',
  price: '',
  From: '',
  to: '',
};
const optionsPrice = [30, 40, 50, 60, 70, 80];

const FormCatalog = () => {
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
            <label htmlFor="make">Enter the text</label>
            <Field as="select" id="make" name="make">
              {optionsModel.map(make => (
                <option id={make} value={make}>
                  {make}
                </option>
              ))}
            </Field>
            <label htmlFor="price">To $</label>
            <Field as="select" id="price" name="price">
              {optionsPrice.map(price => (
                <option id={price} value={price}>
                  {price}
                </option>
              ))}
            </Field>
            <label htmlFor="From">From</label>
            <Field type="number" name="From" placeholder="From" />
            <label htmlFor="to">To</label>
            <Field type="number" name="to" placeholder="to" />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormCatalog;
