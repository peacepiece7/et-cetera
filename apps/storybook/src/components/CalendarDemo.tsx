import React from 'react';
import './App.css';
import { Calendar } from '@repo/ui-shadcn/calendar';

export const CalendarSingleDateDemo = ({ ...args }: any) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  <Calendar
    {...args}
    mode="single"
    captionLayout="dropdown"
    fromYear={2002}
    toYear={2024}
    fromDate={new Date(2022, 0, 1)}
    toDate={new Date(2022, 0, 31)}
    selected={selectedDate}
    onSelect={setSelectedDate}
  />;
};

export const CalendarMultipleDateDemo = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date[]>();
  <Calendar
    mode="multiple"
    captionLayout="dropdown"
    fromYear={2002}
    toYear={2024}
    fromDate={new Date(2022, 0, 1)}
    toDate={new Date(2022, 0, 31)}
    selected={selectedDate}
    onSelect={setSelectedDate}
  />;
};

export const CalendarDateRangeDemo = () => {
  type DateRange = {
    from: Date | undefined;
    to?: Date | undefined;
  };
  const [selectedDateRange, setSelectedDateRange] = React.useState<DateRange>();

  return (
    <>
      <h1>Design System Template</h1>
      <p>Turborepo + Storybook + Shadcn + Tailwindcss</p>
      <div className="w-1/3 mx-auto">
        {/* <ButtonLoading /> */}
        <Calendar
          mode="range"
          captionLayout="dropdown"
          fromYear={2002}
          toYear={2024}
          selected={selectedDateRange}
          onSelect={setSelectedDateRange}
        />
      </div>
    </>
  );
};
