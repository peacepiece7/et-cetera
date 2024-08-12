import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { ResizableDemo, ResizableHandleDemo, ResizableVerticalDemo } from '../../../components/ResizableDemo';

const meta = {
  title: 'shadcn/demo/resizable',
  component: ResizableDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/resizable"
          referenceURL="https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ResizableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  render: () => <ResizableVerticalDemo />,
};

export const Handle: Story = {
  render: () => <ResizableHandleDemo />,
};
