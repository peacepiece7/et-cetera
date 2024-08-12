import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { Avatar, AvatarImage, AvatarFallback } from '@repo/ui-shadcn';

const meta = {
  title: 'shadcn/demo/avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/badge" />,
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        // code: ``,
      },
    },
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="https://github.com/peacepiece7.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  },
};

export const Fallback: Story = {
  parameters: {
    docs: {
      source: {
        // code: ``,
      },
    },
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  },
};
