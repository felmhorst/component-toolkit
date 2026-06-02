import type { Preview } from '@storybook/nextjs-vite'
import "../app/globals.css";

const preview: Preview = {
  parameters: {
      controls: {
          matchers: {
              color: /(background|color)$/i,
              date: /Date$/i,
          },
      },
      backgrounds: {
          options: {
              // default overrides
              dark: { name: "Dark", value: "#15161A"},
              light: { name: "Light", value: "#FFFFFF"},

              // custom options
              surface: { name: "Surface", value: "var(--color-surface)" }
          }
      },
      nextjs: {
          router: {
              pathname: '/about',
              asPath: '/profile',
          },
      },
  },
};

export default preview;