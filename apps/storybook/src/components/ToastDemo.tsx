import { ToastAction } from '@repo/ui-shadcn/ui/toast';
import { Button } from '@repo/ui-shadcn/ui/button';
import { useToast } from '@repo/ui-shadcn/hooks/use-toast';

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up ',
          description: 'Friday, February 10, 2023 at 5:57 PM',
          action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
        });
      }}
    >
      Add to calendar
    </Button>
  );
}
