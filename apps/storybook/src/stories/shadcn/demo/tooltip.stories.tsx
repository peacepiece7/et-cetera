import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { TooltipDemo } from '../../../components/TooltipDemo';

const meta = {
  title: 'shadcn/demo/tooltip',
  component: TooltipDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/tooltip"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/tooltip#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof TooltipDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
