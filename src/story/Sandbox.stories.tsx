import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sandbox } from 'component/Sandbox';
import 'story/Sandbox.stories.css';

const meta: ComponentMeta<typeof Sandbox> = {
    component: Sandbox,
    argTypes: {
        name: {
            control: { type: 'text' }
        },
        module: {
            control: { type: 'text' }
        }
    }
};

export default meta;

const Template: ComponentStory<typeof Sandbox> = args => <Sandbox {...args} />;

export const OpenProject = Template.bind({});

OpenProject.args = {
    className: 'sandbox',
    name: 'lets-react-simple-typescript-example-7xid9'
};

export const OpenSpecificFile = Template.bind({});

OpenSpecificFile.args = {
    ...OpenProject.args,
    module: '/src/App.ts'
};
