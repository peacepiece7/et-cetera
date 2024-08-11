import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { Toaster } from '@repo/ui-shadcn';
import { DialogCloseButton, DialogDemo } from '../../../components/DialogDemo';

const meta = {
  title: 'shadcn/demo/dialog',
  component: DialogDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/chart"
          referenceURL="https://recharts.org/en-US/"
        />
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
} satisfies Meta<typeof DialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `

        `,
      },
    },
  },
};

export const DialogCloseDemo: Story = {
  render: () => <DialogCloseButton />,
};
