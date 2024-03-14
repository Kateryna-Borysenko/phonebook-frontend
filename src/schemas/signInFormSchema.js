import * as yup from 'yup';

import { EMAIL_REGEX, PASSWORD_REGEX } from '../helpers/regexPatterns';

import {
  EMAIL_CRITERIA,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_CRITERIA,
} from '../helpers/constants';

export const signInFormSchema = yup.object().shape({
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
});
