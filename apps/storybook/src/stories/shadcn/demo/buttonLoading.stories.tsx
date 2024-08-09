import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLoading } from '@repo/ui-shadcn';
import CustomDocument from '../../../components/CustomDocument';

const meta = {
  title: 'shadcn/demo/buttonLoading',
  component: ButtonLoading,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/button" />,
    },
  },
  tags: ['autodocs'],
  args: {
    size: 'default',
    variant: 'default',
    label: '로딩중입니다',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default'],
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args) => {
    return <ButtonLoading {...args} />;
  },
} satisfies Meta<typeof ButtonLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
