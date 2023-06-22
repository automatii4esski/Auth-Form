import { FC } from 'react';
import styles from './aboutForm.module.scss';
import Input from '../../UI/inputs/input/Input';
import FormElementWrapper from '../../UI/wrappers/formElementWrapper/FormElementWrapper';

const AboutForm: FC = () => {
  return (
    <form>
      <FormElementWrapper title="Phone">
        <Input placeholder="erere" />
      </FormElementWrapper>
    </form>
  );
};

export default AboutForm;
