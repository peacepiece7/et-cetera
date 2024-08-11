import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { DatePickerDemo, Toaster } from '@repo/ui-shadcn';
import { DatePickerForm, DatePickerWithPresetsDemo, DatePickerWithRangeDemo } from '../../../components/DatePickerDemo';

const meta = {
  title: 'shadcn/demo/datePicker',
  component: DatePickerDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/date-picker" />,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePickerDemo>;

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

export const RangePicker: Story = {
  render: () => <DatePickerWithRangeDemo />,
};

export const WithPresets: Story = {
  render: () => <DatePickerWithPresetsDemo />,
};

export const Form: Story = {
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
  render: () => <DatePickerForm />,
};
