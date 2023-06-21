import { GetAttributes } from './global';

export interface AvatarProps extends GetAttributes<'div'> {
  src: string;
  alt?: string;
}
