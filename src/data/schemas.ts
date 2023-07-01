import { object, ObjectSchema, string } from 'yup';
import { AboutDataType } from '../types/about';
import {
  emailRegExp,
  lettersAndNumbersRegExp,
  lettersRegExp,
  phoneRegExp,
} from './regExps';
import {
  maxLengthMessage,
  requiredInputMessage,
  wrongFormatMessage,
} from './messages';
import { FirstStepDataType } from '../types/formSteps';

export const aboutSchema: ObjectSchema<AboutDataType> = object({
  phone: string()
    .matches(phoneRegExp, wrongFormatMessage)
    .required(requiredInputMessage),
  email: string()
    .matches(emailRegExp, wrongFormatMessage)
    .required(requiredInputMessage),
});

export const firstStepSchema: ObjectSchema<FirstStepDataType> = object({
  nickname: string()
    .max(30, maxLengthMessage(30))
    .matches(lettersAndNumbersRegExp, wrongFormatMessage)
    .required(requiredInputMessage),
  name: string()
    .max(50, maxLengthMessage(50))
    .matches(lettersRegExp, wrongFormatMessage)
    .required(requiredInputMessage),
  sername: string()
    .max(50, maxLengthMessage(50))
    .matches(lettersRegExp, wrongFormatMessage)
    .required(requiredInputMessage),
  sex: string().required(requiredInputMessage),
});
