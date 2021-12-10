import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';
import { AiOutlineArrowRight } from 'react-icons/ai';
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
    <Button size={'small'} color={'primary'} variant={'outlined'} disabled>
      primary small outline disabled
    </Button>
    <p />
    <Button size={'small'} color={'primary'} disabled>
      primary small disabled
    </Button>
    <p />
    <Button size={'small'} color={'primary'} variant={'outlined'}>
      primary small outline
    </Button>
    <p />
    <Button size={'small'} color={'primary'}>
      primary small
    </Button>
    <p />
    <Button color={'blue'}>blue normal</Button>
    <p />
    <Button size={'small'} color={'blue'} variant={'outlined'}>
      blue small outlined
    </Button>
    <p />
    <Button>normal</Button>
    <p />
    <Button size={'small'} variant={'outlined'}>
      normal outlined
    </Button>
  </div>
);
