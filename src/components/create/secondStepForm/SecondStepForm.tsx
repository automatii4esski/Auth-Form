import { FC } from 'react';
import styles from './secondStepForm.module.scss';
import FormElementWrapper from '../../UI/wrappers/formElementWrapper/FormElementWrapper';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import Button from '../../UI/buttons/button/Button';
import { DevTool } from '@hookform/devtools';
import { useDispatch, useSelector } from 'react-redux';
import { SecondStepDataType } from '../../../types/formSteps';
import { selectSecondStepData } from '../../../store/create/secondStep/secondStepSelector';
import { useQueryFormStep } from '../../../hooks/useQueryFormStep';
import { yupResolver } from '@hookform/resolvers/yup';
import { setSecondStepData } from '../../../store/create/secondStep/secondStepAction';
import Input from '../../UI/inputs/input/Input';
import InputWithDelete from '../../UI/inputs/inputWithDelete/InputWithDelete';
import MultInputs from '../../UI/inputs/multInputs/MultInputs';
import Checkbox from '../../UI/inputs/checkbox/Checkbox';

const SecondStepForm: FC = () => {
  const dispatch = useDispatch();
  const [queryOnNext, queryOnBack] = useQueryFormStep();
  const secondStepData = useSelector(selectSecondStepData);

  const { formState, register, handleSubmit, control } =
    useForm<SecondStepDataType>({
      defaultValues: {
        ...secondStepData,
        advantages: secondStepData.advantages.map((adv) => ({ value: adv })),
      },
      mode: 'onBlur',
      // resolver: yupResolver(firstStepSchema),
    });

  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    dispatch(
      setSecondStepData({
        ...data,
        advantages: data.advantages.map((adv) => adv.value),
      })
    );
    queryOnNext();
  });
  const onBack = function () {
    queryOnBack();
  };

  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <div className={styles.elements}>
          {/* Advantages */}
          <FormElementWrapper title="Advantages" error={''}>
            <MultInputs<SecondStepDataType>
              registerPathGenerator={(index) => `advantages.${index}.value`}
              name="advantages"
              onAppendValue={{ value: '' }}
              control={control}
              placeholder="Advantage"
              register={register}
            />
          </FormElementWrapper>

          <FormElementWrapper title="Checkbox group">
            <Checkbox value={'checked'} {...register('checkboxes')}>
              1
            </Checkbox>
            <Checkbox value={'checked'} {...register('checkboxes')}>
              2
            </Checkbox>
            <Checkbox value={'checked'} {...register('checkboxes')}>
              3
            </Checkbox>
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
