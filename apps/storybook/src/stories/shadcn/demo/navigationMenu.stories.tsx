import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { NavigationMenuDemo } from '../../../components/NavigationMenuDemo';

const meta = {
  title: 'shadcn/demo/navigationMenu',
  component: NavigationMenuDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/navigation-menu"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/navigation-menu#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-[300px] m-12">
        <Story />
      </div>
    ),
  ],
};
