import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loading from './Loading';

export default {
    title: 'Basic/Loading',
    component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const CircularIcon = Template.bind({});
export const SpinIcon = Template.bind({});
CircularIcon.args = {
    type: 'circular',
    color: '#1989fa',
    size: 24
}

SpinIcon.args = {
    type: 'spinner',
    vertical: true,
    size: 40
}