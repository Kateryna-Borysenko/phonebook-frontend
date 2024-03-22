import * as yup from 'yup';

import { USER_NAME_REGEX } from '../helpers/regexPatterns';

import {
  NAME_CRITERIA,
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  NAME_REQUIRED,
  EMAIL_CRITERIA,
  PHONE_CRITERIA,
  PHONE_REQUIRED,
} from '../helpers/constants';

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, NAME_MIN_LENGTH)
    .max(20, NAME_MAX_LENGTH)
    .matches(USER_NAME_REGEX, NAME_CRITERIA)
    .required(NAME_REQUIRED),

  email: yup
    .string()
    .trim()
    .lowercase()
    .nullable()
    .matches(/^$|^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, EMAIL_CRITERIA),
  phone: yup
    .string()
    .matches(/^\(\d{3}\) \d{3}-\d{4}$/, PHONE_CRITERIA)
    .required(PHONE_REQUIRED),
});
