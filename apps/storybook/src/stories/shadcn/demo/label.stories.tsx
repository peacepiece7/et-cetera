import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { InputOTPDemo } from '../../../components/InputOTPDemo';
import { Label } from '@repo/ui-shadcn/ui/label';
import { Checkbox } from '@repo/ui-shadcn/ui/checkbox';

const meta = {
  title: 'shadcn/demo/label',
  component: Label,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/label"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/label#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof InputOTPDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label {...args} htmlFor="terms">
          Accept terms and conditions
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">
          Accept terms and conditions
        </Label>
      </div>
    </div>
        `,
      },
    },
  },
};
