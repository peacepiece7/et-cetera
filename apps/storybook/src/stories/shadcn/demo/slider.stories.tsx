import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { Slider } from '@repo/ui-shadcn';

const meta = {
  title: 'shadcn/demo/slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/slider"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/slider#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

type SliderProps = React.ComponentProps<typeof Slider>;
export const Default: Story = {
  render: (args: SliderProps) => (
    <div className="min-w-[400px]">
      <Slider defaultValue={[50]} max={100} step={1} className={`w-[60%] ${args.className}`} {...args} />
    </div>
  ),
};
