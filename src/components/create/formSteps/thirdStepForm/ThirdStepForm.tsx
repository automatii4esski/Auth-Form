import { FC, useEffect, useState } from 'react';
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
import SuccessPopupContent from '../../../popup/successPopupContent/SuccessPopupContent';
import { PopupStatus } from '../../../../types/global';
import { useFetch } from '../../../../hooks/useFetch';
import FailPopupContent from '../../../popup/failPopupContent/FailPopupContent';
import Loader from '../../../UI/loader/loader/Loader';
import { useNavigate } from 'react-router-dom';

const ThirdStepForm: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [_, queryOnBack] = useQueryFormStep();
  const thirdStepData = useSelector(selectThirdStepData);
  const [popupStatus, setPopupStatus] = useState<PopupStatus>('disabled');
  const [fetchData, isLoading, error] = useFetch(async () => {
    const response = await fetch(
      'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
      {
        method: 'POST',
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  });

  const { formState, register, handleSubmit, control, watch } =
    useForm<ThirdStepDataType>({
      defaultValues: thirdStepData,
      mode: 'onBlur',
      resolver: yupResolver(thirdStepSchema),
    });

  const value = watch('about');
  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    dispatch(setThirdStepData({ ...data, isFilled: true }));
    fetchData();
    setPopupStatus('active');
  });

  const onBack = function () {
    queryOnBack();
  };

  const hidePopup = function () {
    setPopupStatus('disabled');
  };

  const onSuccessPopupButtonClick = function () {
    hidePopup();
    navigate('/');
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
      <Popup onClickOut={hidePopup} status={popupStatus}>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <FailPopupContent
            onCloseButtonClick={hidePopup}
            onButtonClick={hidePopup}
          />
        ) : (
          <SuccessPopupContent onButtonClick={onSuccessPopupButtonClick} />
        )}
      </Popup>
    </>
  );
};

export default ThirdStepForm;
