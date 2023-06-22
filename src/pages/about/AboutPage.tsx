import { FC } from 'react';
import AboutHeader from '../../components/about/aboutHeader/AboutHeader';
import styles from './aboutPage.module.scss';
import AboutForm from '../../components/about/aboutForm/AboutForm';

const AboutPage: FC = () => {
  return (
    <section className={styles.about}>
      <AboutHeader />
      <AboutForm />
    </section>
  );
};

export default AboutPage;
