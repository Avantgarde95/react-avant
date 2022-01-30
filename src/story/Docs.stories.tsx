import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Markdown } from 'component/Markdown';
import Logo from 'image/Logo.png';

const Docs = ({ children }: { children: string }) => (
    <Markdown fallback={'Loading...'}>
        {children}
    </Markdown>
);

const meta: ComponentMeta<typeof Docs> = {
    component: Docs
};

export default meta;

const Template: ComponentStory<typeof Docs> = () => (
    <Docs>
        {`
# react-avant

![Logo](${Logo})

Collection of the React components commonly used in my projects.  
Visit [here](https://github.com/Avantgarde95/react-avant) to see the code.

## Features

- Modular
  - You don't have to import the components you don't use
- Supports CSR & SSR
  - ex. Next.js

## Caution

- The main purpose of this library is implement common components for use in my personal projects.
  So APIs can be changed frequently.
  You can use this library freely, but use at your own risk.

## How to install

- Add \`"react-avant": "Avantgarde95/react-avant"\` to \`dependencies\` of your package.json.

## How to use

ex. How to use \`<Icon/>\`

\`\`\`tsx
import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import 'react-avant/lib/Icon.css';

const App = () => (
    <div>
        <Icon ... />
    </div>
);
\`\`\`
`}
    </Docs>
);

export const About = Template.bind({});
