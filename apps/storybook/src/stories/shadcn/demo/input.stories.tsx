import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { Input } from '@repo/ui-shadcn';

const meta = {
  title: 'shadcn/demo/input',
  component: Input,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/input" />,
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
