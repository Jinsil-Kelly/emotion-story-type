//https://storybook.js.org/docs/configurations/typescript-config/
import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.(js|mdx|tsx)$/), module);
