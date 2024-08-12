import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '@/components/CustomDocument';
import { ToggleGroupDemo } from '@/components/ToggleGroupDemo';

const meta = {
  title: 'shadcn/demo/toggleGroup',
  component: ToggleGroupDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/toggle"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/toggle#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroupDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
