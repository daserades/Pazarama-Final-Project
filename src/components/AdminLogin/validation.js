import { object, string } from 'yup';

const validations = object({
  userName: string()
    .min(3)
    .max(255)
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  password: string().min(6)
});

export default validations;
