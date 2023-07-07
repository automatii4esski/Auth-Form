import { object, ObjectSchema, string, array, boolean } from 'yup';
import { AboutDataType } from '../types/about';
import {
  emailRegExp,
  lettersAndNumbersRegExp,
  lettersRegExp,
  phoneRegExp,
} from './regExps';
import {
  maxLengthMessage,
  requiredAllInputsMessage,
  requiredInputMessage,
  wrongFormatMessage,
} from './messages';
import {
  FirstStepDataType,
  SecondStepDataType,
  ThirdStepDataType,
} from '../types/formSteps';

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

export const secondStepSchema: ObjectSchema<SecondStepDataType> = object({
  advantages: array()
    .of(
      object({
        value: string().defined(),
      })
    )
    .defined()
    .test(
      '',
      requiredAllInputsMessage,
      (advantages) => !advantages.some((adv) => adv.value === '')
    ),
  checkboxes: array()
    .of(
      object({
        value: string().defined(),
        isChecked: boolean().defined(),
      })
    )
    .defined(),
  radio: string().required(requiredInputMessage),
});

export const thirdStepSchema: ObjectSchema<ThirdStepDataType> = object({
  about: string().required(requiredInputMessage),
});
