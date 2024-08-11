import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { SonnerDemo } from '../../../components/SonnerDemo';

const meta = {
  title: 'shadcn/demo/sonner',
  component: SonnerDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/sonner"
          referenceURL="https://sonner.emilkowal.ski/"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SonnerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
