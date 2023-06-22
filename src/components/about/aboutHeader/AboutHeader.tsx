import { FC } from 'react';
import Avatar from '../../UI/avatars/avatar/Avatar';
import AvatarImg from '../../../assets/img/avatar/avatar.jpg';
import SocialLink from '../../UI/links/socialLink/SocialLink';
import { socialLinks } from '../../../data/links';
import styles from './aboutHeader.module.scss';

const AboutHeader: FC = () => {
  return (
    <header className={styles.header}>
      <Avatar className={styles.avatar} src={AvatarImg} />
      <div>
        <h1 className={styles.name}>Скворцов Иван</h1>
        <div className={styles.links}>
          {socialLinks.map((link, index) => (
            <SocialLink className={styles.link} key={index} href={link.href}>
              {link.text}
            </SocialLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
