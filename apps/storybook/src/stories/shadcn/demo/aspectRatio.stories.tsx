import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';
import { AspectRatio } from '@repo/ui-shadcn/ui/aspectRatio';

const meta = {
  title: 'shadcn/demo/aspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/aspect-ratio"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/aspect-ratio#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
import Image from "next/image"

<AspectRatio ratio={16 / 9} className="bg-muted">
  <Image
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Photo by Drew Beamer"
    className="rounded-md object-cover"
  />
</AspectRatio>`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-w-[300px]">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    return (
      <AspectRatio {...args} ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    );
  },
};

export const Overlay: Story = {
  parameters: {
    docs: {
      source: {
        code: `
import Image from "next/image"

<AspectRatio ratio={16 / 9} className="bg-muted">
  <Image
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Photo by Drew Beamer"
    className="rounded-md object-cover"
  />
</AspectRatio>`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-w-[300px]">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    return (
      <AspectRatio {...args} ratio={16 / 9} className="flex justify-center items-center bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover max-w-[200px] max-h-[50px]"
        />
      </AspectRatio>
    );
  },
};
