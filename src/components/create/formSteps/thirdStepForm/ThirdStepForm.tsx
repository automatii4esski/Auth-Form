import { FC } from 'react';
import styles from './thirdStepForms.module.scss';
import Button from '../../../UI/buttons/button/Button';
import { DevTool } from '@hookform/devtools';
import FormElementWrapper from '../../../UI/wrappers/formElementWrapper/FormElementWrapper';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryFormStep } from '../../../../hooks/useQueryFormStep';
import { selectThirdStepData } from '../../../../store/create/thirdStep/thirdStepSelector';
import { ThirdStepDataType } from '../../../../types/formSteps';
import { setThirdStepData } from '../../../../store/create/thirdStep/thirdStepAction';
import { yupResolver } from '@hookform/resolvers/yup';
import { thirdStepSchema } from '../../../../data/schemas';
import Textarea from '../../../UI/textarea/textarea/Textarea';
import { maxAboutInputLength } from '../../../../data/config';
import Popup from '../../../UI/popup/popup/Popup';
import FailPopupContent from '../../../popup/failPopupContent/FailPopupContent';

const ThirdStepForm: FC = () => {
  const dispatch = useDispatch();
  const [_, queryOnBack] = useQueryFormStep();
  const thirdStepData = useSelector(selectThirdStepData);

  const { formState, register, handleSubmit, control, watch } =
    useForm<ThirdStepDataType>({
      defaultValues: thirdStepData,
      mode: 'onBlur',
      resolver: yupResolver(thirdStepSchema),
    });

  const value = watch('about');
  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    dispatch(setThirdStepData(data));
  });
  const onBack = function () {
    queryOnBack();
  };

  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <div className={styles.elements}>
          {/* Advantages */}
          <FormElementWrapper
            title="About"
            error={errors.about?.message}
            tip={`${value.length}/${maxAboutInputLength}`}
          >
            <Textarea
              maxLength={maxAboutInputLength}
              placeholder="About"
              {...register('about')}
            />
          </FormElementWrapper>
        </div>
        <div className={styles.buttons}>
          <Button type="button" onClick={onBack} variant="hollow">
            Назад
          </Button>
          <Button type="submit">Отправить</Button>
        </div>
      </form>
      <Popup isVisible>
        <FailPopupContent />
      </Popup>
      <DevTool control={control} />
    </>
  );
};

export default ThirdStepForm;
