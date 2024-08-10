import React from 'react';
import './App.css';
import { Calendar } from '@repo/ui-shadcn';

type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};
function App() {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
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
          fromDate={new Date(2022, 0, 1)}
          toDate={new Date(2022, 0, 31)}
          selected={selectedDateRange}
          onSelect={setSelectedDateRange}
        />
      </div>
    </>
  );
}

export default App;
