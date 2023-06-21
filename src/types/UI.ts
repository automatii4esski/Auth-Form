import { GetAttributes } from './global';

export interface AvatarProps extends GetAttributes<'div'> {
  src: string;
  alt?: string;
}

export interface SocialLinkProps extends GetAttributes<'a'> {}

export interface InputProps extends GetAttributes<'input'> {}

export interface ButtonProps extends GetAttributes<'button'> {
  variant?: 'hollow' | 'fill';
}
