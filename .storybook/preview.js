// APW 1.5
// Previsualización de historias

import React from 'react';
import DocsTheme from './theme';
import { Theme } from '@soft4pilot/sdb';

// Parámetros
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: DocsTheme,
  },
}

// Decoradores
export const decorators = [
  Story => (
    <>
      <Theme>
        <Story />
      </Theme>
    </>
  ),
];
