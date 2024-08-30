import { Separator } from '@repo/ui-shadcn/ui/separator';
import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { SeparatorDemo } from '../../../components/SeparatorDemo';

const meta = {
  title: 'shadcn/demo/separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/separator"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/separator#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SeparatorDemo />,
};
