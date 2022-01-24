import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';

import { Icon } from 'component/Icon';

const meta: ComponentMeta<typeof Icon> = {
    component: Icon,
    argTypes: {
        definition: {
            control: false
        }
    }
};

export default meta;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Guitar = Template.bind({});

Guitar.args = {
    definition: faGuitar
};

export const Music = Template.bind({});

Music.args = {
    definition: faMusic
};
