import { FC } from 'react';
import styles from './aboutForm.module.scss';
import Button from '../../UI/buttons/button/Button';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { AboutDataType } from '../../../types/about';
import FormElementWrapper from '../../UI/wrappers/formElementWrapper/FormElementWrapper';
import Input from '../../UI/inputs/input/Input';
import InputWithMask from '../../UI/inputs/inputWithMask/InputWithMask';

const AboutForm: FC = () => {
  const { register, control, handleSubmit, formState } = useForm<AboutDataType>(
    {
      defaultValues: {
        phone: '99',
      },
    }
  );
  const { errors } = formState;

  return (
    <>
      <form className={styles.form} noValidate>
        <div className={styles.elements}>
          <FormElementWrapper title="Номер телефона">
            <InputWithMask
              alwaysShowMask
              mask="+7 (999) 999-99-99"
              {...register('phone')}
            />
          </FormElementWrapper>

          <FormElementWrapper title="Номер телефона">
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

// const { fields, append, remove } = useFieldArray({
//   name: 'advantages' as never,
//   control,
// });

/* {a.map((ch, i) => (
            <input type="checkbox" key={i} {...register(`checkBoxes.${i}`)} />
          ))}
        </div>
        <div>
          <h1>gg</h1>
          {fields.map((ad, i) => (
            <>
              <input
                placeholder="Place"
                type="text"
                key={ad.id}
                {...register(`advantages.${i}.value`)}
              />
              <button onClick={() => remove(i)}>remove</button>
            </>
          ))}
          <button onClick={() => append({ value: '' })}>+</button>*/
