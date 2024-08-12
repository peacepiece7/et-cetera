import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { Label, Switch } from '@repo/ui-shadcn';
import { SwitchForm } from '../../../components/SwitchDemo';

const meta = {
  title: 'shadcn/demo/switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/switch"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/switch#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Form: Story = {
  render: () => <SwitchForm />,
};
