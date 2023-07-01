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
import { useNavigate } from 'react-router-dom';

const AboutForm: FC = () => {
  const aboutData = useSelector(selectAboutData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, control, handleSubmit, formState } = useForm<AboutDataType>(
    {
      defaultValues: aboutData,
      mode: 'onBlur',
      resolver: yupResolver(aboutSchema),
    }
  );

  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    navigate('create?step=1');
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
              mask="+7 (999) 999-99-99"
              disabled
              defaultValue={aboutData.phone}
              {...register('phone')}
            />
          </FormElementWrapper>

          {/* Email */}
          <FormElementWrapper
            title="Номер телефона"
            error={errors.email?.message}
          >
            <Input disabled placeholder="Email" {...register('email')} />
          </FormElementWrapper>
        </div>

        <Button type="submit">Начать</Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default AboutForm;
