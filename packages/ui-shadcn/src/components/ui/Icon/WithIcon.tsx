import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../lib/utils';

const iconVariants = cva('', {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: 'h-4 w-4',
      sm: 'w-3 h-3',
      lg: 'w-5 h-5',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

export interface WithIconProps extends React.ButtonHTMLAttributes<HTMLElement>, VariantProps<typeof iconVariants> {}
const WithIcon = ({ className, variant, size, ...rest }: WithIconProps) => {
  return <Slot className={cn(iconVariants({ className, variant, size }))} {...rest}></Slot>;
};

const MemoWithIcon = React.memo(WithIcon);
export { MemoWithIcon, WithIcon, iconVariants };
