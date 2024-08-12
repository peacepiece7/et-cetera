// https://cmdk.paco.me/

import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { CommandDemo, CommandDialogDemo } from '../../../components/CommandDemo';

const meta = {
  title: 'shadcn/demo/command',
  component: CommandDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/command"
          referenceURL="https://cmdk.paco.me/"
        />
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommandDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `

        `,
      },
    },
  },
};

export const Dialog: Story = {
  render: () => <CommandDialogDemo />,
};
