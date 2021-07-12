// Button.stories.ts | Button.stories.tsx

import React from 'react'
import { styled } from '@stitches/react';

import { Meta } from '@storybook/react';

import { buttonStyle } from './';

const Button = styled("button", buttonStyle);

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

export const Primary: React.VFC<{}> = () => <Button>Button</Button>;