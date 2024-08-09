import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { Button, WithIcon, MemoWithIcon } from '@repo/ui-shadcn';
import CustomDocument from '../../../components/CustomDocument';

const meta = {
  title: 'shadcn/demo/button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/button" />,
    },
  },
  tags: ['autodocs'],
  args: {
    size: 'default',
    disabled: false,
    variant: 'default',
    children: '버튼입니다',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//   },
// };

// export const Link: Story = {
//   args: {
//     variant: 'link',
//   },
// };

// export const Ghost: Story = {
//   args: {
//     variant: 'ghost',
//   },
// };

// export const Outline: Story = {
//   args: {
//     variant: 'outline',
//   },
// };

// export const Destructive: Story = {
//   args: {
//     variant: 'destructive',
//   },
// };

export const IconRecommendExample: Story = {
  render: (args) => (
    <Button {...args}>
      <WithIcon className="mr-2">
        <EnvelopeOpenIcon />
      </WithIcon>
      <p>Login with Email</p>
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Button>
  <WithIcon className="mr-2">
    <EnvelopeOpenIcon />
  </WithIcon>
  <p>Login with Email</p>
</Button>`,
      },
    },
  },
};

export const IconMemoizationExample: Story = {
  render: (args) => (
    <Button {...args}>
      <MemoWithIcon className="mr-2">
        <EnvelopeOpenIcon />
      </MemoWithIcon>
      <p>Login with Email</p>
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Button>
  <MemoWithIcon className="mr-2">
    <EnvelopeOpenIcon />
  </MemoWithIcon>
  <p>Login with Email</p>
</Button>`,
      },
    },
  },
};

export const IconForAssassin: Story = {
  args: {
    children: 'button',
    size: 'icon',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
  },
  render: (args) => {
    return (
      <Button {...args} className="flex">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<Button>
  <ChevronRightIcon className="h-4 w-4" />
</Button>`,
      },
    },
  },
};

export const IconForNinja: Story = {
  render: (args) => (
    <Button {...args}>
      <EnvelopeOpenIcon className="h-4 w-4 mr-2" /> Login with Email
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Button>
  <EnvelopeOpenIcon className="h-4 w-4 mr-2" /> Login with Email
</Button>`,
      },
    },
  },
};
