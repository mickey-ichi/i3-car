import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Submit: ComponentStory<typeof Button> = () => (
  <div>
    <Button size={'small'} types={'orange'}>
      Submit Small
    </Button>
    <Button size={'normal'} types={'outlineNormal'}>
      Submit Normal
    </Button>
    <Button size={'large'} types={'outlineOrange'}>
      Submit Large
    </Button>
    <Button size={'large'} types={'price'}>
      Submit price
    </Button>
    <Button>Submit price</Button>
  </div>
);
