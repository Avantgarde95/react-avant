import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Image } from 'component/Image';

const meta: ComponentMeta<typeof Image> = {
    component: Image,
    argTypes: {
        src: {
            control: { type: 'text' }
        }
    }
};

export default meta;

const Template: ComponentStory<typeof Image> = args => <Image {...args} />;

export const Placeholder = Template.bind({});

Placeholder.args = {
    src: 'https://via.placeholder.com/150'
};
