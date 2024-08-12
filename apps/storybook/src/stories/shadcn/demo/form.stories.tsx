import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { ComboboxFormDemo } from '../../../components/comboboxDemo';

const meta = {
  title: 'shadcn/demo/form',
  component: ComboboxFormDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/form"
          referenceURL="https://react-hook-form.com/"
        >
          react-hook-form을 그대로 씀, components 추가할 때 스토리 작성하자
        </CustomDocument>
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof ComboboxFormDemo>;

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
