import { FC } from 'react';
import styles from './aboutForm.module.scss';
import TipAndErrorWrapper from '../../UI/wrappers/tipAndErrorWrapper/TipAndErrorWrapper';
import Input from '../../UI/inputs/input/Input';

const AboutForm: FC = () => {
  return (
    <form>
      <TipAndErrorWrapper>
        <Input placeholder="erere" />
      </TipAndErrorWrapper>
    </form>
  );
};

export default AboutForm;
