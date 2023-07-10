import { FC } from 'react';
import styles from './secondStepForm.module.scss';
import FormElementWrapper from '../../../UI/wrappers/formElementWrapper/FormElementWrapper';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import Button from '../../../UI/buttons/button/Button';
import { DevTool } from '@hookform/devtools';
import { useDispatch, useSelector } from 'react-redux';
import { SecondStepDataType } from '../../../../types/formSteps';
import { selectSecondStepData } from '../../../../store/create/secondStep/secondStepSelector';
import { useQueryFormStep } from '../../../../hooks/useQueryFormStep';
import { yupResolver } from '@hookform/resolvers/yup';
import { setSecondStepData } from '../../../../store/create/secondStep/secondStepAction';
import MultInputs from '../../../UI/inputs/multInputs/MultInputs';
import Checkbox from '../../../UI/inputs/checkbox/Checkbox';
import Radio from '../../../UI/inputs/radio/Radio';
import { secondStepSchema } from '../../../../data/schemas';

const SecondStepForm: FC = () => {
  const dispatch = useDispatch();
  const [queryOnNext, queryOnBack] = useQueryFormStep();
  const secondStepData = useSelector(selectSecondStepData);

  const { formState, register, handleSubmit, control } =
    useForm<SecondStepDataType>({
      defaultValues: {
        ...secondStepData,
        advantages: secondStepData.advantages.map((adv) => ({ value: adv })),
        radio: secondStepData.radio.checkedValue,
      },
      mode: 'onBlur',
      resolver: yupResolver(secondStepSchema),
    });

  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    dispatch(
      setSecondStepData({
        ...data,
        advantages: data.advantages.map((adv) => adv.value),
        radio: {
          values: secondStepData.radio.values,
          checkedValue: data.radio,
        },
        isFilled: true,
      })
    );
    queryOnNext();
  });
  const onBack = function () {
    queryOnBack();
  };
  console.log(errors);

  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <div className={styles.elements}>
          {/* Advantages */}
          <FormElementWrapper
            title="Advantages"
            error={errors.advantages?.message}
          >
            <MultInputs<SecondStepDataType>
              registerPathGenerator={(index) => `advantages.${index}.value`}
              name="advantages"
              onAppendValue={{ value: '' }}
              control={control}
              placeholder="Advantage"
              register={register}
            />
          </FormElementWrapper>

          {/* Checkboxes */}
          <FormElementWrapper title="Checkbox group">
            {secondStepData.checkboxes.map((checkbox, index) => (
              <Checkbox
                key={index}
                defaultChecked={checkbox.isChecked}
                {...register(`checkboxes.${index}.isChecked`)}
              >
                {checkbox.value}
              </Checkbox>
            ))}
          </FormElementWrapper>

          {/* Radio */}
          <FormElementWrapper title="Radio group" error={errors.radio?.message}>
            {secondStepData.radio.values.map((radio, index) => (
              <Radio key={index} value={radio} {...register('radio')}>
                {radio}
              </Radio>
            ))}
          </FormElementWrapper>
        </div>
        <div className={styles.buttons}>
          <Button type="button" onClick={onBack} variant="hollow">
            Назад
          </Button>
          <Button type="submit">Далее</Button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default SecondStepForm;
