import React from 'react';
import { addDecorator } from '@storybook/react';
import Page from './Page';

addDecorator(storyFn => <Page>{storyFn()}</Page>);
