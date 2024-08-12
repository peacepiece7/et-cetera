// https://cmdk.paco.me/

import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { ContextMenuDemo } from '../../../components/ContextMenu';

const meta = {
  title: 'shadcn/demo/contextMenu',
  component: ContextMenuDemo,
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
} satisfies Meta<typeof ContextMenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
