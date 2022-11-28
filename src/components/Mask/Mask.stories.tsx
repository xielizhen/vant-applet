import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Mask from './';

export default {
    title: 'Basic/Mask',
    component: Mask,
} as ComponentMeta<typeof Mask>;

const Template: ComponentStory<typeof Mask> = (args) => <Mask {...args} />;

export const Mask1 = Template.bind({});
Mask1.args = {
}