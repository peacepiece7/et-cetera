import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { SelectDemo, SelectForm, SelectScrollable } from '../../../components/SelectDemo';

const meta = {
  title: 'shadcn/demo/select',
  component: SelectDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/select"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/select#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SelectDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Scrollable: Story = {
  render: () => <SelectScrollable />,
};

export const Form: Story = {
  render: () => <SelectForm />,
};
