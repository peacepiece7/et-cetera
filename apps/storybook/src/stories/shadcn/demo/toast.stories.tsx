import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { ComboboxFormDemo } from '../../../components/comboboxDemo';
import { Toaster } from '@repo/ui-shadcn';

const meta = {
  title: 'shadcn/demo/toast',
  component: ComboboxFormDemo,
  args: {
    disabled: false,
    placeholder: 'Type your message here...',
  },
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/toast"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/toast#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ComboboxFormDemo>;

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
