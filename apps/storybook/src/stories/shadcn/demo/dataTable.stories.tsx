import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { Toaster } from '@repo/ui-shadcn';
import { DataTableDemo } from '../../../components/DataTableDemo';

const meta = {
  title: 'shadcn/demo/dataTable',
  component: DataTableDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/data-table">
          <p>쓸 때 정리하자</p>
        </CustomDocument>
      ),
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof DataTableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: ``,
      },
    },
  },
};
