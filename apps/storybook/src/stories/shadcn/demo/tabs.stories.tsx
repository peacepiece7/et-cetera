import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { TabsDemo } from '../../../components/TabsDemo';
import { Toaster } from '@repo/ui-shadcn';

const meta = {
  title: 'shadcn/demo/tabs',
  component: TabsDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/tabs"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/tabs#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof TabsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
};
