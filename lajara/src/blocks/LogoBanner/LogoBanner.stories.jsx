import React from 'react'
import { LogoBanner } from './LogoBanner'

export default {
    title: "2. Blocks / LogoBanner",
    component: "LogoBanner",
	parameters: {
        layout: 'fullscreen',
    }
}

const Template = (args, { globals }) => <LogoBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Samarbetspartners',
    logos: [
        {
            link: '/',
            imageSrc: 'https://via.placeholder.com/150x80',
            imageAlt: 'Alt text'
        },
        {
            link: '/',
            imageSrc: 'https://via.placeholder.com/150x80',
            imageAlt: 'Alt text'
        },
        {
            link: '/',
            imageSrc: 'https://via.placeholder.com/150x80',
            imageAlt: 'Alt text'
        },
        {
            link: '/',
            imageSrc: 'https://via.placeholder.com/150x80',
            imageAlt: 'Alt text'
        }
    ]
};