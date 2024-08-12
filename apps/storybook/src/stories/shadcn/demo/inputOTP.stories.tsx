import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { InputOTPDemo } from '../../../components/InputOTPDemo';

const meta = {
  title: 'shadcn/demo/inputOTP',
  component: InputOTPDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/input-otp"
          referenceURL="https://input-otp.rodz.dev/"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof InputOTPDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
