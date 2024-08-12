import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { Toggle } from '@repo/ui-shadcn';
import { FontBoldIcon, FontItalicIcon } from '@radix-ui/react-icons';

const meta = {
  title: 'shadcn/demo/toggle',
  component: Toggle,
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'outline'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/toggle"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/toggle#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  render: (args) => {
    return (
      <Toggle aria-label="Toggle bold" {...args}>
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>
    );
  },
};

export const Outline: Story = {
  render: (args) => {
    return (
      <Toggle aria-label="Toggle italic" {...args}>
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>
    );
  },
};

export const WithText: Story = {
  render: (args) => {
    return (
      <Toggle aria-label="Toggle italic" {...args}>
        <FontItalicIcon className="h-4 w-4" />
        Italic
      </Toggle>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'outline',
  },
  render: (args) => {
    return (
      <Toggle aria-label="Toggle italic" {...args}>
        <FontItalicIcon className="h-4 w-4" />
        Italic
      </Toggle>
    );
  },
};
