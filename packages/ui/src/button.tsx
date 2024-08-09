'use client';
import { ReactNode } from 'react';

export interface ButtonProps {
  /**
   * Button contents
   */
  children?: ReactNode;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  children,
  className,
  primary = false,
  size = 'medium',
  backgroundColor,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      className={['storybook-button', `storybook-button--${size}`, className, mode].join(' ')}
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
