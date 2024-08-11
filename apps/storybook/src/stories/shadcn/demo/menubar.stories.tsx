import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { MenubarDemo } from '../../../components/MenubarDemo';

const meta = {
  title: 'shadcn/demo/menubar',
  component: MenubarDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/menubar"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/menubar#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof MenubarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
