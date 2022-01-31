import { object, string } from 'yup';

const validations = object({
  name: string()
    .required()
    .max(255)
    .min(3)
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  lastName: string()
    .required()
    .min(2)
    .max(255)
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  age: string()
    .required()
    .matches(/^[0-9]{2}$/, 'Must be exactly 2 digits'),
  identificationNumber: string()
    .required()
    .matches(/^[0-9]{11}$/, 'Must be exactly 11 digits'),
  reasonForApplication: string().required().min(3).max(255),
  address: string().required().min(3).max(255),
  attachments: string()
});

export default validations;
