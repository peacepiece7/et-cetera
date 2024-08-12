import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { SkeletonDemo } from '../../../components/SkeletonDemo';

const meta = {
  title: 'shadcn/demo/skeleton',
  component: SkeletonDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/skeleton" />,
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
