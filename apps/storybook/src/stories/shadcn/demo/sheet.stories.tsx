import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { SheetDemo, SheetSide } from '../../../components/SheetDemo';

const meta = {
  title: 'shadcn/demo/sheet',
  component: SheetDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/sheet"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/dialog#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SheetDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Side: Story = {
  render: () => <SheetSide />,
};
