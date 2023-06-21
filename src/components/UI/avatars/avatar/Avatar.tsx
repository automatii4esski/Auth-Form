import { FC } from 'react';
import styles from './avatar.module.scss';
import { AvatarProps } from '../../../../types/UI';

const Avatar: FC<AvatarProps> = ({
  className,
  src,
  alt = 'Avatar',
  ...props
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <img className={styles.avatar} src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
