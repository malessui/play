// Button.stories.ts | Button.stories.tsx

import React from 'react'
import { Meta } from '@storybook/react';
import EditorPreview from "./index"

const value1 = {
  html: `
<div class="section">
  <div>
    <h1>Welcome to Playground</h1>
    <p> A simple playground for HTML, CSS and JavaScript</p>
    <a href="https://github.com/shipless/drafteditor">Github</a>
  </div>
</div>
  `,
  css: `
body {
  background: #97a2a9;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}

.section {
  background: #fff;
  max-width: calc(100vw - 20%);
  max-height: calc(100vw - 20%);
}

.section div {
  padding: 40px;
}

.section h1 {
  margin: 0;
}
  `,
  javascript: ``
}

export default {
  component: EditorPreview,
  title: 'Shipless',
} as Meta;

export const Play: React.VFC<{}> = () => (
  <EditorPreview
    defaultValue={value1}
  />
);