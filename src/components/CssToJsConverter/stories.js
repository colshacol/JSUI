import React from 'react';

//storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { wrappers } from 'storybook-helpers';

//components
import CssToJsConverter from './index';

const stories = storiesOf('CssToJsConverter');

stories
  .addDecorator(wrappers.backgrounds)
  .addDecorator(wrappers.padding)
  .addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <CssToJsConverter/>
  );
});
