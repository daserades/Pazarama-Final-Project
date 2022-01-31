import { object, string } from 'yup';

const validations = object({
  applicationCode: string().matches(/^[0-9]{5}$/, 'Must be exactly 5 digits')
});

export default validations;
