import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Code } from 'component/Code';

const meta: ComponentMeta<typeof Code> = {
    component: Code,
    argTypes: {
        language: {
            control: { type: 'text' }
        },
        children: {
            control: { type: 'text' }
        }
    }
};

export default meta;

const Template: ComponentStory<typeof Code> = args => <Code {...args} />;

export const TS = Template.bind({});

TS.args = {
    language: 'typescript',
    children: `
function addNumbers(a: number, b: number) {
    return a + b;
}
`.trim()
};

export const TSX = Template.bind({});

TSX.args = {
    language: 'tsx',
    children: `
import React, { useState } from 'react';

const App = () => {
    const [text, setText] = useState('Hello!');

    const onClick = () => {
        setText('World!');
    };

    return <button onClick={onClick}>{text}</button>;
};
`.trim()
};
