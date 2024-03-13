import * as yup from 'yup';

import {
  USER_NAME_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from '../helpers/regexPatterns';

import {
  NAME_CRITERIA,
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  NAME_REQUIRED,
  EMAIL_CRITERIA,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_CRITERIA,
  PASSWORD_MISMATCH,
  CONFIRM_PASSWORD_REQUIRED,
} from '../helpers/constants';

export const registrationFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, NAME_MIN_LENGTH)
    .max(20, NAME_MAX_LENGTH)
    .matches(USER_NAME_REGEX, NAME_CRITERIA)
    .required(NAME_REQUIRED),
  email: yup
    .string()
    .trim()
    .matches(EMAIL_REGEX, EMAIL_CRITERIA)
    .lowercase()
    .required(EMAIL_REQUIRED),
  password: yup
    .string()
    .trim()
    .min(8, PASSWORD_MIN_LENGTH)
    .max(16, PASSWORD_MAX_LENGTH)
    .matches(PASSWORD_REGEX, PASSWORD_CRITERIA)
    .required(PASSWORD_REQUIRED),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password'), null], PASSWORD_MISMATCH)
    .required(CONFIRM_PASSWORD_REQUIRED),
});
