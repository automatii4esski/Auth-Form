import { FC, ReactNode } from 'react';
import styles from './progressLine.module.scss';
import ProgressLineDot from './progressLineDot/ProgressLineDot';
import { ProgressLineProps } from '../../../types/UI';

const ProgressLine: FC<ProgressLineProps> = ({
  className,
  active,
  total,
  width = 100 * ((active - 1) / (total - 1)),
  ...props
}) => {
  let isActivePassed = false;
  const dots: ReactNode[] = [];
  console.log(active);

  for (let i = 1; i < total + 1; i++) {
    if (!isActivePassed) {
      isActivePassed = active === i;
      dots.push(
        <ProgressLineDot key={i} variant={isActivePassed ? 'active' : 'done'}>
          {i}
        </ProgressLineDot>
      );
    } else {
      dots.push(
        <ProgressLineDot key={i} variant="inactive">
          {i}
        </ProgressLineDot>
      );
    }
  }

  return (
    <div className={`${styles.line} ${className}`} {...props}>
      <div className={styles.inner}>
        <div
          style={{
            width: `${width}%`,
          }}
          className={styles.progress}
        ></div>
      </div>

      {dots}
    </div>
  );
};

export default ProgressLine;
