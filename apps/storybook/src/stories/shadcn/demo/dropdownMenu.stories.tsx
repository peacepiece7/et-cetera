import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { DropdownMenuDemo, DropdownMenuCheckboxes, DropdownMenuRadioGroupDemo } from '../../../components/DropdownMenu';

const meta = {
  title: 'shadcn/demo/dropdownMenu',
  component: DropdownMenuDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/dropdown-menu"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/dropdown-menu#api-reference"
        />
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenuDemo>;

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

export const Checkboxes: Story = {
  render: () => <DropdownMenuCheckboxes />,
};

export const RadioGroup: Story = {
  render: () => <DropdownMenuRadioGroupDemo />,
};
