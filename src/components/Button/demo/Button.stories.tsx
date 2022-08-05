import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';

export default {
    title: 'Basic/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClickMe = Template.bind({});
ClickMe.args = {
   children: 'click me!'
}

export const HelloWorld = Template.bind({});
HelloWorld.args = {
   children: 'hello world'
}