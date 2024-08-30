import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import {
  CheckboxDemo,
  CheckboxReactHookFormMultiple,
  TableWithCheckbox,
  CheckboxWithText,
} from '../../../components/CheckboxDemo';
import { Toaster } from '@repo/ui-shadcn/ui/toaster';

const meta = {
  title: 'shadcn/demo/checkbox',
  component: CheckboxDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/combobox"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference"
        />
      ),
    },
  },
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </label>
</div>
        `,
      },
    },
  },
};

export const WithText: Story = {
  render: () => <CheckboxWithText />,
};

export const MultipleCheckboxForm: Story = {
  render: () => <CheckboxReactHookFormMultiple />,
};

export const FormTable: Story = {
  render: () => <TableWithCheckbox />,
};
