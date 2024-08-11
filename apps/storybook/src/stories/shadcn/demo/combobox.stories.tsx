import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { Toaster } from '@repo/ui-shadcn';
import {
  ComboboxDemo,
  ComboboxFormDemo,
  ComboboxMultiDemo,
  ComboboxPopoverDemo,
  ComboBoxResponsiveDemo,
} from '../../../components/comboboxDemo';

const meta = {
  title: 'shadcn/demo/combobox',
  component: ComboboxDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/collapsible"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/collapsible#api-reference"
        />
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComboboxDemo>;

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

export const Multi: Story = {
  render: () => <ComboboxMultiDemo />,
  parameters: {
    docs: {
      source: {
        code: `
        `,
      },
    },
  },
};

export const Popover: Story = {
  render: () => <ComboboxPopoverDemo />,
};

export const Responsive: Story = {
  render: () => <ComboBoxResponsiveDemo />,
};

export const Form: Story = {
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
  render: () => <ComboboxFormDemo />,
};
