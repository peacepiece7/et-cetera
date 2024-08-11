import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { HoverCardDemo } from '../../../components/HoverCardDemo';

const meta = {
  title: 'shadcn/demo/hoverCard',
  component: HoverCardDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/hover-card"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/hover-card#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <div className="min-h-[500px]">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      source: {
        code: `
        `,
      },
    },
  },
};
