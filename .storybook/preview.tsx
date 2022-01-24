/**
 * @file Set global actions, decorators, etc.
 */

import React, { Suspense } from 'react';
import { Parameters } from '@storybook/react';

/**
 * Mark all 'onXXX' args as actions automatically.
 */
export const parameters: Parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};
