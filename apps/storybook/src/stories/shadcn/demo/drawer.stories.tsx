import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { DrawerDemo } from '../../../components/drawerDemo';
import { ComboBoxResponsiveDemo } from '../../../components/comboboxDemo';

const meta = {
  title: 'shadcn/demo/drawer',
  component: DrawerDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/drawer" />,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DrawerDemo>;

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

export const Responsive: Story = {
  render: () => <ComboBoxResponsiveDemo />,
};
