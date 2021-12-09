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
    <Button types={'submit'} size={'xs'}>
      Submit Small
    </Button>
    <p />
    <Button types={'submit'} size={'md'}>
      Submit Medium
    </Button>
    <p />
    <Button types={'submit'} size={'lg'}>
      Submit Large
    </Button>
  </div>
);

export const SubmitOutline: ComponentStory<typeof Button> = () => (
  <div>
    <Button types={'submitOutline'} size={'xs'}>
      Submit Outline Small
    </Button>
    <p />
    <Button types={'submitOutline'} size={'md'}>
      Submit Outline Medium
    </Button>
    <p />
    <Button types={'submitOutline'} size={'lg'}>
      Submit Outline Large
    </Button>
  </div>
);
export const Cancel: ComponentStory<typeof Button> = () => (
  <div>
    <Button types={'cancel'} size={'xs'}>
      Cancel Small
    </Button>
    <p />
    <Button types={'cancel'} size={'md'}>
      Cancel Medium
    </Button>
    <p />
    <Button types={'cancel'} size={'lg'}>
      Cancel Large
    </Button>
  </div>
);
