import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { CheckboxReactHookFormMultiple, TableWithCheckbox } from '../../../components/CheckboxDemo';

const meta = {
  title: 'shadcn/demo/table',
  component: CheckboxReactHookFormMultiple,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/chart"
          referenceURL="https://recharts.org/en-US/"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxReactHookFormMultiple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
const [selectedDate, setSelectedDate] = React.useState<Date>();
return (
  <Calendar
    selected={selectedDate}
    onSelect={setSelectedDate}
    footer={\`date : \${selectedDate ? selectedDate?.toDateString() : ''}\`}
  />
        `,
      },
    },
  },
};

export const Table: Story = {
  render: () => <TableWithCheckbox />,
};
