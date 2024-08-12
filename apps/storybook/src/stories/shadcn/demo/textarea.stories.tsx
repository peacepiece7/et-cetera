import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { Button, Label, Textarea } from '@repo/ui-shadcn';
import { TextareaFormDemo } from '../../../components/TextareaDemo';

const meta = {
  title: 'shadcn/demo/textarea',
  component: Textarea,
  args: {
    disabled: false,
    placeholder: 'Type your message here...',
  },
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/tabs"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/tabs#api-reference"
        />
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: (args) => {
    return (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." {...args} id="message" />
      </div>
    );
  },
};

export const WithText: Story = {
  render: (args) => {
    return (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Your Message</Label>
        <Textarea placeholder="Type your message here." {...args} id="message-2" />
        <p className="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
      </div>
    );
  },
};

export const WithButton: Story = {
  render: (args) => {
    return (
      <div className="grid w-full gap-2">
        <Textarea placeholder="Type your message here." {...args} />
        <Button>Send message</Button>
      </div>
    );
  },
};

export const Form: Story = {
  render: () => <TextareaFormDemo />,
};
