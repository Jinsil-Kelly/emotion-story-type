//https://storybook.js.org/docs/configurations/typescript-config/
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

// addDecorator(withInfo);
addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: '#eee',
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    inline: false,
    source: true,
  })
);

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.(js|mdx|tsx)$/), module);

