import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Button } from '@repo/ui-shadcn';
import CustomDocument from '../../../components/CustomDocument';

const meta = {
  title: 'shadcn/demo/button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/button" />,
    },
  },
  tags: ['autodocs'],
  args: {
    size: 'default',
    type: 'button',
    disabled: false,
    variant: 'default',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'button',
  },
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Icon: Story = {
  args: {
    children: 'button',
    size: 'icon',
    variant: 'default',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
  },

  render: (args) => {
    return (
      <Button {...args}>
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    );
  },
};
