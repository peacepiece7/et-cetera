import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { PaginationDemo } from '../../../components/PaginationDemo';

const meta = {
  title: 'shadcn/demo/pagination',
  component: PaginationDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/pagination" />,
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof PaginationDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
