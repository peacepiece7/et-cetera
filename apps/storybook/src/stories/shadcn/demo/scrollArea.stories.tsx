import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { ScrollAreaDemo, ScrollAreaHorizontalDemo } from '../../../components/ScrollAreaDemo';

const meta = {
  title: 'shadcn/demo/scrollArea',
  component: ScrollAreaDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/scroll-area"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/scroll-area#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ScrollAreaDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-h-[400px] overflow-hidden">
      <ScrollAreaDemo />
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => <ScrollAreaHorizontalDemo />,
};
