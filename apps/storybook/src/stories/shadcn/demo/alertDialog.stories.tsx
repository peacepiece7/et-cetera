import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import { AlertDialogDemo, AlertDialogRequirePortalAndOverlayDemo } from '../../../components/AlertDialogDemo';
import CustomDocument from '../../../components/CustomDocument';

const meta = {
  title: 'shadcn/demo/alertDialog',
  component: AlertDialogDemo,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => (
        <CustomDocument
          documentsURL="https://ui.shadcn.com/docs/components/alert-dialog"
          referenceURL="https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference"
        />
      ),
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof AlertDialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>`,
      },
    },
  },
};

export const CustomizesOverlayOrPortal: Story = {
  render: () => <AlertDialogRequirePortalAndOverlayDemo />,
  parameters: {
    docs: {
      source: {
        code: `
const [container, setContainer] = React.useState(null);

return () => (
  <AlertDialog>
    <AlertDialogTrigger>
      <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogPortal container={container} > // => 포탈이 어디에 붙을지 설정할 수 있습니다. Default: document.body
      <AlertDialogOverlay className="bg-rose-300/55" /> // => 이 부분에서 Overlay를 커스텀할 수 있습니다.
      <AlertDialogContentOnly> // AlertDialogContent 대신 AlertDialogContentOnly를 사용하면 Overlay를 커스텀할 수 있습니다.
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContentOnly>
    </AlertDialogPortal>
  </AlertDialog>
  <div ref={setContainer} />)`,
      },
    },
  },
};
