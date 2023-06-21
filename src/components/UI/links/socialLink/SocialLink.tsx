import { FC } from 'react';
import { SocialLinkProps } from '../../../../types/UI';
import styles from './socialLink.module.scss';

const SocialLink: FC<SocialLinkProps> = ({ className, children, ...props }) => {
  return (
    <a className={`${styles.link} ${className}`} {...props}>
      {children}
    </a>
  );
};

export default SocialLink;
