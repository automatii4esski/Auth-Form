import { object, ObjectSchema, string } from 'yup';
import { AboutDataType } from '../types/about';
import { emailRegExp, phoneRegExp } from './regExps';
import { requiredInputMessage, wrongInputValueMessage } from './messages';

export const aboutSchema: ObjectSchema<AboutDataType> = object({
  phone: string()
    .matches(phoneRegExp, wrongInputValueMessage)
    .required(requiredInputMessage),
  email: string()
    .matches(emailRegExp, wrongInputValueMessage)
    .required(requiredInputMessage),
});
