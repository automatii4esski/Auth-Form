import { FC } from 'react';
import styles from './loader.module.scss';
import { GetAttributes } from '../../../../types/global';
const Loader: FC<GetAttributes<'div'>> = ({ className, ...props }) => {
  return <div className={`${styles.loader} ${className}`} {...props}></div>;
};

export default Loader;
