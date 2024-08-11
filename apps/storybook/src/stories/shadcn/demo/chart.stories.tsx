import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import {
  ChartAxisDemo,
  ChartDemo,
  ChartGridDemo,
  ChartLegendDemo,
  ChartTooltipDemo,
  AreaChartDemo,
} from '../../../components/ChartDemo';

const meta = {
  title: 'shadcn/demo/chart',
  component: ChartDemo,

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
} satisfies Meta<typeof ChartDemo>;

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

export const Grid: Story = {
  render: () => <ChartGridDemo />,
};

export const Axis: Story = {
  render: () => <ChartAxisDemo />,
};

export const Tooltip: Story = {
  render: () => <ChartTooltipDemo />,
};

export const Legend: Story = {
  render: () => <ChartLegendDemo />,
};

export const Area: Story = {
  render: () => <AreaChartDemo />,
};
