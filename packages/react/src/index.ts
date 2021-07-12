import { createCss } from '@stitches/react';
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from '@radix-ui/colors';

export * from './button';

const { styled, theme, getCssString } = createCss({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
    },
    space: {
      sm: "0.5rem"
    }
  },
});

const darkTheme = theme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  }
});

export {
  styled,
  darkTheme,
  getCssString
}