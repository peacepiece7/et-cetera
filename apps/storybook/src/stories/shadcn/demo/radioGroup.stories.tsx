import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { RadioGroupDemo, RadioGroupForm } from '../../../components/RadioGroupDemo';
import { Toaster } from '@repo/ui-shadcn/ui/toaster';

const meta = {
  title: 'shadcn/demo/radioGroup',
  component: RadioGroupDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/radio-group"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroupDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Form: Story = {
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
  render: () => (
    <div className="min-w-96">
      <RadioGroupForm />
    </div>
  ),
};
