import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../../lib/utils';

const kbdVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium tracking-wide select-none pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border border-input bg-background shadow-md hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-2 py-2',
        sm: 'h-8 rounded-sm text-xs',
        lg: 'h-10 rounded-lg px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface KdbProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {
  asChild?: boolean;
  keyboards: string[];
  delimiter?: string;
}

const Kbd = React.forwardRef<HTMLElement, KdbProps>(
  ({ asChild = false, variant, size, keyboards = [], delimiter, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'kbd';

    return (
      <Comp className={cn(kbdVariants({ variant, size, className }))} ref={ref} {...props}>
        {keyboards.map((keyboard, idx) => (
          <span key={idx + keyboard} className="px-1">
            {keyboard}
          </span>
        ))}
      </Comp>
    );
  },
);
Kbd.displayName = 'Kbd';

export { Kbd };
