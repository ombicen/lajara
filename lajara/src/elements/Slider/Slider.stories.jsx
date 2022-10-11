import React from 'react'
import { Slider } from './Slider'

export default {
    title: "1. Elements / Slider",
    component: "Slider"
}

const Template = (args, { globals }) => <div style={{width: '15rem'}}><Slider {...args} /></div>;

export const Default = Template.bind({});
Default.args = {

};