import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import CustomDocument from '../../../components/CustomDocument';
import { CollapsibleDemo } from '../../../components/CollapsibleDemo';
import { Toaster } from '@repo/ui-shadcn';

const meta = {
  title: 'shadcn/demo/collapsible',
  component: CollapsibleDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/collapsible"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/collapsible#api-reference"
        />
      ),
    },
  },
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof CollapsibleDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  );
        `,
      },
    },
  },
};
