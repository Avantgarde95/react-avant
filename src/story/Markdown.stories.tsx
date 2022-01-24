import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Markdown } from 'component/Markdown';

const meta: ComponentMeta<typeof Markdown> = {
    component: Markdown,
    argTypes: {
        fallback: {
            control: { type: 'text' }
        },
        children: {
            control: { type: 'text' }
        }
    }
};

export default meta;

const Template: ComponentStory<typeof Markdown> = args => <Markdown {...args} />;

export const Article = Template.bind({});

Article.args = {
    fallback: 'Loading...',
    children: `
# Title

## List

- Apple
- Banana
- Orange

## Code

The value of \`x\` is 3.

\`\`\`typescript
const x: number = 3;
\`\`\`

## Table

|A1|A2|A3|
|---|---|---|
|B1|B2|B3|
|B1|B2|B3|
|B1|B2|B3|
`.trim()
};
