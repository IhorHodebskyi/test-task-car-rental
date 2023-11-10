import { Field, Formik, Form } from 'formik';

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
const initialValues = { model: [] };
const optionsPrice = [30, 40, 50, 60, 70, 80];
const FormCatalog = () => {
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <>
      <Formik nitialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form autoComplete="off">
            <label htmlFor="model">Enter the text</label>
            <Field component="select" id="model" name="model">
              {optionsModel.map(model => (
                <option value={model}>{model}</option>
              ))}
            </Field>
            <button type="submit">Log In</button>
          </Form>
        )}
      </Formik>
      {/* <form onSubmit={handelSubmit}>
        <select name="model">
          {optionsModel.map(model => (
            <option value={model}>{model}</option>
          ))}
        </select>
        <select name="price">
          {optionsPrice.map(price => (
            <option value={price}>{price}</option>
          ))}
        </select>
        <label>
          From
          <input name="from" type="number" />
        </label>
        <label>
          To
          <input name="to" type="number" />
        </label>
        <button type="submit">Search </button>
      </form> */}
    </>
  );
};
export default FormCatalog;
