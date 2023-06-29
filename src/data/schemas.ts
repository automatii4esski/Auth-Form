import { object, ObjectSchema, string } from 'yup';
import { AboutDataType } from '../types/about';

export const aboutSchema: ObjectSchema<AboutDataType> = object({
  phone: string().required(),
  email: string().required(),
});
