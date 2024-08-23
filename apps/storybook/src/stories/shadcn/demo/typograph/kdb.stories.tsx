import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from '@repo/ui-shadcn';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../../components/CustomDocument';

const meta = {
  title: 'shadcn/demo/typography/kdb',
  component: Kbd,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          referenceURL="https://ui.shadcn.com/docs/components/accordion"
          documentsURL="https://www.radix-ui.com/primitives/docs/components/accordion#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
  args: {
    size: 'default',
    variant: 'default',
    keyboards: ['⌘', '+', 'J'],
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default'],
    },
  },
  mount: (ctx) => {
    return ctx.mount;
  },
  decorators: [
    (Story) => (
      <div className="min-w-[500px]">
        <Story />
      </div>
    ),
  ],
};
