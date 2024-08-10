import { Button } from '@repo/ui-shadcn';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

export default function CustomDocument({
  referenceURL,
  documentsURL,
  children,
}: {
  referenceURL?: string;
  documentsURL?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Title />
      <div className="flex">
        {referenceURL && (
          <Button variant="link" className="pl-0">
            <a href={referenceURL} target="_blank">
              API Reference
            </a>
          </Button>
        )}
        {documentsURL && (
          <Button variant="link" className="pl-0">
            <a href={documentsURL} target="_blank">
              Shadcn Document
            </a>
          </Button>
        )}
      </div>
      <Subtitle />
      {children}
      <Description />
      <Primary />
      <Controls />
      <Stories />
    </>
  );
}
