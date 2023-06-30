import { FC, ReactNode } from 'react';
import styles from './progressLine.module.scss';
import ProgressLineDot from './progressLineDot/ProgressLineDot';
import { ProgressLineProps } from '../../../types/UI';

const ProgressLine: FC<ProgressLineProps> = ({
  className,
  active,
  total,
  width = 0,
  ...props
}) => {
  let isActivePassed = false;
  const dots: ReactNode[] = [];

  for (let i = 1; i < total + 1; i++) {
    if (!isActivePassed) {
      isActivePassed = active === i;
      dots.push(
        <ProgressLineDot key={i} variant={isActivePassed ? 'active' : 'done'} />
      );
    } else {
      dots.push(<ProgressLineDot key={i} variant="inactive" />);
    }
  }

  return (
    <div className={`${styles.line} ${className}`} {...props}>
      <div
        style={{
          width: `${width}%`,
        }}
        className={styles.progress}
      ></div>

      {dots}
    </div>
  );
};

export default ProgressLine;
