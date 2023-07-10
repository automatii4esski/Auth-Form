import { FC } from 'react';
import styles from './firstStepForm.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import FormElementWrapper from '../../../UI/wrappers/formElementWrapper/FormElementWrapper';
import Input from '../../../UI/inputs/input/Input';
import { FirstStepDataType } from '../../../../types/formSteps';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from '../../../UI/selects/select/Select';
import { sexOptions } from '../../../../data/selectOptions';
import Button from '../../../UI/buttons/button/Button';
import { SelectOptionType } from '../../../../types/global';
import { firstStepSchema } from '../../../../data/schemas';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstStepData } from '../../../../store/create/firstStep/firstStepSelector';
import { setFirstStepData } from '../../../../store/create/firstStep/firstStepAction';
import { useQueryFormStep } from '../../../../hooks/useQueryFormStep';

const FirstStepForm: FC = () => {
  const dispatch = useDispatch();
  const [queryOnNext, queryOnBack] = useQueryFormStep();
  const firstStepData = useSelector(selectFirstStepData);

  const { formState, register, handleSubmit, control } =
    useForm<FirstStepDataType>({
      defaultValues: firstStepData,
      mode: 'onBlur',
      resolver: yupResolver(firstStepSchema),
    });

  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    dispatch(setFirstStepData({ ...data, isFilled: true }));
    queryOnNext();
  });
  const onBack = function () {
    queryOnBack();
  };

  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <div className={styles.elements}>
          {/* Nickname */}
          <FormElementWrapper
            title="Nickname"
            tip={'Введите Nickname (Только буквы и цифры)'}
            error={errors.nickname?.message}
          >
            <Input placeholder="Nickname" {...register('nickname')} />
          </FormElementWrapper>

          {/* Name */}
          <FormElementWrapper
            title="Name"
            tip={'Введите Name (Только буквы)'}
            error={errors.name?.message}
          >
            <Input placeholder="Name" {...register('name')} />
          </FormElementWrapper>

          {/* Sername */}
          <FormElementWrapper
            title="Sername"
            tip={'Введите Sername (Только буквы)'}
            error={errors.sername?.message}
          >
            <Input placeholder="Sername" {...register('sername')} />
          </FormElementWrapper>

          {/* Sex Select */}
          <FormElementWrapper
            title="Sex"
            tip={'Выберите пол'}
            error={errors.sex?.message}
          >
            <Controller
              name="sex"
              control={control}
              render={({ field }) => (
                <Select
                  onChange={(option: SelectOptionType | null) => {
                    option && field.onChange(option.value);
                  }}
                  onBlur={field.onBlur}
                  placeholder={sexOptions.placeholder}
                  options={sexOptions.options}
                />
              )}
            />
          </FormElementWrapper>
        </div>
        <div className={styles.buttons}>
          <Button onClick={onBack} variant="hollow">
            Назад
          </Button>
          <Button type="submit">Далее</Button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default FirstStepForm;
