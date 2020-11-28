// APW 1.5
// Previsualización de historias

import React from 'react';
import DocsTheme from './theme';
import { StyleProvider } from '@soft4pilot/sdb';

import { MetadataProvider } from 'model/metadata';

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
      <MetadataProvider>
        <StyleProvider>
          <Story />
        </StyleProvider>
      </MetadataProvider>
    </>
  ),
];
