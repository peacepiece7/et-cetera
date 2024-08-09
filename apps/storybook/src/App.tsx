import './App.css';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@repo/ui-shadcn';

function App() {
  return (
    <>
      <h1>Design System Template</h1>
      <p>Turborepo + Storybook + Shadcn + Tailwindcss</p>
      <div className="w-1/3 mx-auto">
        <Accordion type="single" collapsible={false} className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent asChild={false}>
              <a>Yes. It adheres to the WAI-ARIA design pattern.</a>
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
      </div>
    </>
  );
}

export default App;
