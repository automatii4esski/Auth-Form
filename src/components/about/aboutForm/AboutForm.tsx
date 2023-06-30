import { FC } from 'react';
import styles from './aboutForm.module.scss';
import Button from '../../UI/buttons/button/Button';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { AboutDataType } from '../../../types/about';
import FormElementWrapper from '../../UI/wrappers/formElementWrapper/FormElementWrapper';
import Input from '../../UI/inputs/input/Input';
import InputWithMask from '../../UI/inputs/inputWithMask/InputWithMask';
import { yupResolver } from '@hookform/resolvers/yup';
import { aboutSchema } from '../../../data/schemas';
import { useDispatch, useSelector } from 'react-redux';
import { selectAboutData } from '../../../store/about/aboutSelector';
import { setAboutData } from '../../../store/about/aboutAction';

const AboutForm: FC = () => {
  const aboutData = useSelector(selectAboutData);
  const dispatch = useDispatch();

  const { register, control, handleSubmit, formState } = useForm<AboutDataType>(
    {
      defaultValues: aboutData,
      mode: 'onBlur',
      resolver: yupResolver(aboutSchema),
    }
  );

  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    dispatch(setAboutData(data));
  });

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form} noValidate>
        <div className={styles.elements}>
          {/* Phone */}
          <FormElementWrapper
            title="Номер телефона"
            error={errors.phone?.message}
          >
            <InputWithMask
              alwaysShowMask
              mask="+7 (999) 999-99-99"
              defaultValue={aboutData.phone}
              {...register('phone')}
            />
          </FormElementWrapper>

          {/* Email */}
          <FormElementWrapper
            title="Номер телефона"
            error={errors.email?.message}
          >
            <Input {...register('email')} />
          </FormElementWrapper>
        </div>

        <Button type="submit">Начать</Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default AboutForm;
