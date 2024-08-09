import './App.css';
import { ButtonLoading } from '@repo/ui-shadcn';

function App() {
  return (
    <>
      <h1>Design System Template</h1>
      <p>Turborepo + Storybook + Shadcn + Tailwindcss</p>
      <div className="w-1/3 mx-auto">
        <ButtonLoading />
      </div>
    </>
  );
}

export default App;
