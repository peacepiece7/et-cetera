import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { Progress } from '@repo/ui-shadcn';
import React from 'react';

const meta = {
  title: 'shadcn/demo/progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/progress"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/progress#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress {...args} value={progress} className="w-[60%]" />;
  },
};
