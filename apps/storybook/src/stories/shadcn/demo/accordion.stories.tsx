import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@repo/ui-shadcn';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';

const meta = {
  title: 'shadcn/demo/accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          referenceURL="https://ui.shadcn.com/docs/components/accordion"
          documentsURL="https://www.radix-ui.com/primitives/docs/components/accordion#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
  args: {
    type: 'single',
    disabled: false,
    asChild: false,
    collapsible: true,
  },
  render: (args) => {
    const collapsible = args.type === 'single' ? args.collapsible : false;
    return (
      <Accordion type={args.type} collapsible={collapsible} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent asChild={args.asChild}>
            {args.asChild ? (
              <a>AccordionItem은 anchor tag입니다. (transition이 끊깁니다.)</a>
            ) : (
              <a>AccordionItem은 div tag입니다.</a>
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
  },
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'select' },
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'type : "single" 일 때만 사용 가능합니다.',
      if: { arg: 'type', neq: 'multiple' },
    },
    asChild: {
      description: 'true시 AccordionContent가 첫번째 자식 태그로 랜더링됩니다. (\\<Slot />)',
      control: { type: 'boolean' },
    },
  },
  mount: (ctx) => {
    return ctx.mount;
  },
  decorators: [
    (Story) => (
      <div className="min-w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'select' },
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'type : "single" 일 때만 사용 가능합니다.',
      if: { arg: 'type', neq: 'multiple' },
    },
    asChild: {
      description: 'true시 AccordionContent가 첫번째 자식 태그로 랜더링됩니다. (\\<Slot />)',
      control: { type: 'boolean' },
    },
  },
  mount: (ctx) => {
    return ctx.mount;
  },
  decorators: [
    (Story) => (
      <div className="min-w-[500px]">
        <Story />
      </div>
    ),
  ],
};
