import * as yup from 'yup';

export const contactDetailSchema = yup.object({
  firstName: yup
    .string()
    .required(),
  lastName: yup
    .string()
    .required(),
  jobTitle: yup
    .string()
    .required(),
  phoneHome: yup
    .string()
    .required(),
  phoneWork: yup
    .string()
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  picture: yup
    .string()
    .url()
    .required(),
});

export const isFormValid = contactData => contactDetailSchema.isValid(contactData)
  .then(valid => valid);
