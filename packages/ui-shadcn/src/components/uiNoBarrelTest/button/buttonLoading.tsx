import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ReloadIcon } from '@radix-ui/react-icons';
import { cn } from '../../../lib/utils';

import { Button, buttonVariants } from '.';
import { iconVariants } from '../Icon/WithIcon';

const buttonLoadingVariants = cva('', {
  variants: {
    variant: {
      default: buttonVariants({ variant: 'ghost' }),
    },
    size: {
      default: buttonVariants({ size: 'default' }),
      sm: buttonVariants({ size: 'sm' }),
      lg: buttonVariants({ size: 'lg' }),
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const iconLoadingVariants = cva('animate-spin', {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: iconVariants({ size: 'default' }) + ' mr-2',
      sm: iconVariants({ size: 'sm' }) + ' mr-1',
      lg: iconVariants({ size: 'lg' }) + ' mr-3',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

export interface ButtonLoadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonLoadingVariants> {
  label?: string;
}

const ButtonLoading = ({ className, variant, size, children, label = '로딩중', ...rest }: ButtonLoadingProps) => {
  return (
    <Button disabled className={cn(buttonLoadingVariants({ variant, size, className }))} {...rest}>
      <ReloadIcon className={cn(iconLoadingVariants({ variant, size }))} />
      {children || <p>{label}</p>}
    </Button>
  );
};

export { ButtonLoading, buttonLoadingVariants };
