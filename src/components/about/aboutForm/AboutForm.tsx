import { FC, createElement } from 'react';
import styles from './aboutForm.module.scss';
import FormElementWrapper from '../../UI/wrappers/formElementWrapper/FormElementWrapper';
import Button from '../../UI/buttons/button/Button';
import { aboutFormElementsSettings } from '../../../data/formElements';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const AboutForm: FC = () => {
  const { register, control, handleSubmit, formState } = useForm({});
  const { errors } = formState;

  return (
    <>
      <form className={styles.form} noValidate>
        <div className={styles.elements}>
          {/* Iterating threw array of elements settings (props, title, component etc) */}
          {aboutFormElementsSettings.map((elementSetting, i) => (
            <FormElementWrapper
              key={i}
              className={styles.block}
              title={elementSetting.title}
            >
              {/* Controller is a wrapper from react-hook-form for the elements to work properly */}
              <Controller
                control={control}
                name={elementSetting.element.name}
                render={({ field }) =>
                  /* Creating element like this because */
                  createElement(
                    elementSetting.element
                      .component as React.ComponentType<any>,
                    { ...elementSetting.element.props, ...field }
                  )
                }
              />
            </FormElementWrapper>
          ))}
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
