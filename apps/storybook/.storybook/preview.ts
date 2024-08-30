import type { Preview } from '@storybook/react';

import '../src/global.css';
import '@repo/ui-shadcn/styles';

// https://storybook.js.org/docs/essentials/actions#action-event-handlers
import { withActions } from '@storybook/addon-actions/decorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withActions],
};

export default preview;
