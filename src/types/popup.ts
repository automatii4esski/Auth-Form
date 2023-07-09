import { GetAttributes } from './global';

export interface FailPopupProps extends GetAttributes<'div'> {
  onButtonClick?: () => any;
  onCloseButtonClick?: () => any;
}

export interface SuccessPopupProps extends GetAttributes<'div'> {
  onButtonClick?: () => any;
}
