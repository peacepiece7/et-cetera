import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@repo/ui-shadcn';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'button',
  },
};

export const Small: Story = {
  args: {
    children: 'button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: 'button',
  },
};
