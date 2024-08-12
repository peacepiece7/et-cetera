import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { Calendar } from '@repo/ui-shadcn';
import React from 'react';

const meta = {
  title: 'shadcn/demo/calendar',
  component: Calendar,
  args: {
    mode: 'default',
    captionLayout: 'buttons',
    fromYear: 2002,
    toYear: 2024,
    fromDate: new Date(2022, 0, 1),
    toDate: new Date(2024, 0, 31),
    // startMonth: new Date(2020, 0, 1),
    // endMonth: new Date(2024, 0, 31),
    fixedWeeks: true,
    showOutsideDays: true,
  },
  argTypes: {
    mode: { table: { disable: true } },

    fixedWeeks: { control: { type: 'boolean' } },
    captionLayout: {
      control: { type: 'select' },
      options: ['buttons', 'dropdown', 'dropdown-button'],
      description: 'dropdown 선택 시 fromYear, toYear 필수',
    },
    showOutsideDays: {
      control: { type: 'boolean' },
      description: '외부 날짜 표시 여부',
    },
    fromYear: {
      control: { type: 'number' },
      description: 'fromDate보다 더 높은 우선순위',
    },
    toYear: {
      control: { type: 'number' },
      description: 'toDate보다 더 높은 우선순위',
    },
    fromDate: {
      control: { type: 'date' },
      description: 'startMonth, fromYear가 더 높은 우선순위',
    },
    toDate: {
      control: { type: 'date' },
      description: 'endMonth, toYear가 더 높은 우선순위',
    },
  },
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/calendar"
          referenceURL="https://daypicker.dev/"
        >
          <p>
            <a href="https://daypicker.dev/docs/translation#example-italian-labels">라벨 수정</a>
          </p>
          <p>
            <a href="https://daypicker.dev/upgrading#4-remove-use-of-fromdate-todate">
              v9 업데이트 : fromDate, toDate 대신startMonth, endMonth 사용
            </a>
          </p>
        </CustomDocument>
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="min-w-[400px] bg-slate-50/50 ">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [selectedDate, setSelectedDate] = React.useState<Date>();
    return (
      <Calendar
        {...args}
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        footer={`date : ${selectedDate ? selectedDate?.toDateString() : ''}`}
      />
    );
  },
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

export const Single: Story = {
  args: {
    mode: 'single',
  },
  decorators: [
    (Story) => (
      <div className="min-w-[400px] bg-slate-50/50 ">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [selectedDate, setSelectedDate] = React.useState<Date>();
    return (
      <Calendar
        {...args}
        captionLayout="dropdown"
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        footer={`date : ${selectedDate ? selectedDate?.toDateString() : ''}`}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedDate, setSelectedDate] = React.useState<Date>();
return (
  <Calendar
    mode="single"
    selected={selectedDate}
    onSelect={setSelectedDate}
    footer={\`date : \${selectedDate ? selectedDate?.toDateString() : ''}\`}
  />
        `,
      },
    },
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
  },
  argTypes: {
    max: {
      control: { type: 'number' },
      description: '선택 가능한 최대 날짜 수',
    },
    min: {
      control: { type: 'number' },
      description: '선택 가능한 최소 날짜 수',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-w-[400px] bg-slate-50/50 ">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [multipleSelectedDates, setMultipleSelectedDates] = React.useState<Date[]>();
    return (
      <Calendar
        max={3}
        min={1}
        {...args}
        mode="multiple"
        selected={multipleSelectedDates}
        onSelect={setMultipleSelectedDates}
        footer={`selected ${multipleSelectedDates ? multipleSelectedDates.length : '0'} dates`}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const [multipleSelectedDates, setMultipleSelectedDates] = React.useState<Date[]>();
return (
  <Calendar
    mode="multiple"
    selected={multipleSelectedDates}
    onSelect={setMultipleSelectedDates}
    footer={\`date : \${multipleSelectedDates ? multipleSelectedDates?.toDateString() : ''}\`}
  />
        `,
      },
    },
  },
};

export const Range: Story = {
  args: {
    mode: 'range',
  },

  decorators: [
    (Story) => (
      <div className="min-w-[400px] bg-slate-50/50 ">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    type DateRange = {
      from: Date | undefined;
      to?: Date | undefined;
    };
    const [selectedDateRange, setSelectedDateRange] = React.useState<DateRange>();
    return (
      <Calendar
        {...(args as { fromDate: Date; toDate: Date })}
        mode="range"
        selected={selectedDateRange}
        onSelect={setSelectedDateRange}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};
const [selectedDateRange, setSelectedDateRange] = React.useState<DateRange>();
return (
  <Calendar
     mode="range"
    selected={selectedDateRange}
    onSelect={setSelectedDateRange}
  />
        `,
      },
    },
  },
};
