import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { PopoverDemo } from '../../../components/popoverDemo';

const meta = {
  title: 'shadcn/demo/popover',
  component: PopoverDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/popover"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/popover#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof PopoverDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
