import { FC } from 'react';
import AboutHeader from '../../components/about/aboutHeader/AboutHeader';
import styles from './aboutPage.module.scss';

const AboutPage: FC = () => {
  return (
    <section className={styles.about}>
      <AboutHeader />
    </section>
  );
};

export default AboutPage;
